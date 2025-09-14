"use client";

import { useState } from "react";
import { useI18n } from "../i18n";

// ================= Firebase (v9 modular) =================
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
// =========================================================

const firebaseConfig = {
  apiKey: "AIzaSyAgRUvBGbs-2wwDE4o7hrVGptu6Pa8zXP0",
  authDomain: "sara-wed.firebaseapp.com",
  projectId: "sara-wed",
  storageBucket: "sara-wed.appspot.com",
  messagingSenderId: "321214583625",
  appId: "1:321214583625:web:31a7b39bbd3d309b3e8098",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function GuestForm() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"yes" | "no" | "">("");
  const [saving, setSaving] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!attendance || !name.trim()) {
      alert("Пожалуйста, заполните имя и выберите присутствие.");
      return;
    }

    try {
      setSaving(true);

      await addDoc(collection(db, "guests"), {
        name: name.trim(),
        attendance,
        createdAt: serverTimestamp(),
        ua: navigator.userAgent,
      });

      alert(
        `${t("guestForm.alert.thanks")}\n${t("guestForm.alert.name")} ${
          name || "—"
        }\n${t("guestForm.alert.attendance")} ${
          attendance === "yes"
            ? t("guestForm.alert.status.yes")
            : t("guestForm.alert.status.no")
        }`
      );

      setName("");
      setAttendance("");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Firestore addDoc error:", err);
      alert(`Не удалось сохранить: ${err?.message || "ошибка"}`);
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="relative min-h-screen bg-[url('/bg/bg_2.png')] bg-top bg-cover bg-no-repeat text-center px-6 py-10">
      <form
        onSubmit={onSubmit}
        className="relative z-10 mx-auto max-w-[760px] space-y-8 text-slate-800"
      >
        <h2 className="text-5xl md:text-6xl font-light italic leading-none mb-2">
          {t("guestForm.title")}
        </h2>

        <p className="text-lg md:text-xl leading-7 opacity-90 mt-10">
          {t("guestForm.description")}
        </p>

        {/* Имя */}
        <div className="space-y-3">
          <label htmlFor="name" className="block text-2xl md:text-[26px]">
            {t("guestForm.nameLabel")}
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("guestForm.namePlaceholder")}
            className="w-full rounded-none border border-slate-700/70 bg-transparent px-4 py-4 text-[18px] outline-none placeholder:text-slate-400 focus:border-slate-900"
          />
        </div>

        {/* Присутствие */}
        <fieldset className="space-y-4">
          <legend className="mb-2 text-2xl md:text-[26px] text-left">
            {t("guestForm.confirmAttendance")}
          </legend>

          <label className="text-left flex items-center gap-3 text-lg">
            <input
              type="radio"
              name="attendance"
              value="yes"
              checked={attendance === "yes"}
              onChange={() => setAttendance("yes")}
              className="h-5 w-5 accent-slate-800"
            />
            <span>{t("guestForm.optionYes")}</span>
          </label>

          <label className="text-left flex items-center gap-3 text-lg">
            <input
              type="radio"
              name="attendance"
              value="no"
              checked={attendance === "no"}
              onChange={() => setAttendance("no")}
              className="h-5 w-5 accent-slate-800"
            />
            <span>{t("guestForm.optionNo")}</span>
          </label>
        </fieldset>

        <div className="pt-2">
          <button
            type="submit"
            disabled={saving}
            className={`inline-flex items-center justify-center rounded-md border border-slate-800/70 px-6 py-3 text-lg tracking-wide transition-colors ${
              saving
                ? "opacity-60 cursor-not-allowed"
                : "hover:bg-slate-900 hover:text-white"
            }`}
          >
            {saving ? "Сохранение..." : t("guestForm.submit")}
          </button>
        </div>
      </form>
    </section>
  );
}
