'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Clock, Sparkles, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

interface FormData {
  name: string;
  contact: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contact: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) {
      newErrors.name = '성함 또는 상호명을 입력해 주세요.';
    }
    if (!formData.contact.trim()) {
      newErrors.contact = '연락처(휴대폰 번호 또는 이메일)를 입력해 주세요.';
    } else if (
      formData.contact.trim().length < 4
    ) {
      newErrors.contact = '올바른 연락처 형식으로 입력해 주세요.';
    }
    if (!formData.message.trim()) {
      newErrors.message = '만들고자 하는 사이트 내용 또는 참고 링크를 적어주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean, reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
      setFormData({ name: '', contact: '', message: '' });
      setErrors({});
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-zinc-50/60 border-t border-zinc-200/80 relative"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Capacity Banner */}
        <div
          id="contact-capacity-banner"
          className="mb-8 p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3.5"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <p className="text-xs sm:text-sm font-semibold text-zinc-900 leading-snug">
              약속된 납기와 코드 완성도를 위해 동시 진행은 주간 최대 2팀으로 제한됩니다.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-800">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>이번 주 1팀 접수 가능</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2
            id="contact-title"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900"
          >
            프로젝트 무료 상담 신청
          </h2>
          <p
            id="contact-subtitle"
            className="mt-2.5 text-sm sm:text-base text-zinc-600"
          >
            기획서가 없어도 괜찮습니다. 원하시는 사이트 분위기나 참고 링크만 알려주시면 됩니다.
          </p>
        </div>

        {/* Card Container with Clean Inputs */}
        <div
          id="contact-card-container"
          className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-10 shadow-xs relative"
        >
          {isSubmitted && submittedData ? (
            /* Success State */
            <div
              id="contact-success-state"
              className="py-6 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200/60">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-zinc-900">
                  상담 신청이 정상적으로 접수되었습니다
                </h3>
                <p className="mt-2 text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                  <strong>{submittedData.name}</strong> 대표님, 남겨주신 연락처(<strong>{submittedData.contact}</strong>)로 24시간 내 친절하게 연락드리겠습니다.
                </p>
              </div>

              {/* Submitted Content Review */}
              <div className="text-left bg-zinc-50 border border-zinc-200/80 rounded-xl p-4 text-xs space-y-2 max-w-md mx-auto">
                <div className="text-zinc-500 font-medium pb-1 border-b border-zinc-200/60 flex items-center justify-between">
                  <span>접수 요약</span>
                  <span className="text-emerald-700 font-semibold">검토 대기 중</span>
                </div>
                <div>
                  <span className="text-zinc-500">성함/상호: </span>
                  <span className="font-semibold text-zinc-800">{submittedData.name}</span>
                </div>
                <div>
                  <span className="text-zinc-500">연락처: </span>
                  <span className="font-semibold text-zinc-800">{submittedData.contact}</span>
                </div>
                <div>
                  <span className="text-zinc-500">요약 내용: </span>
                  <p className="text-zinc-700 mt-1 whitespace-pre-wrap line-clamp-3">
                    {submittedData.message}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  id="contact-new-inquiry-btn"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-xl transition-colors"
                >
                  새로운 문의 작성하기
                </button>
                <a
                  href="mailto:contact@webay.co.kr"
                  id="contact-direct-email-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>이메일로 직접 보내기</span>
                </a>
              </div>
            </div>
          ) : (
            /* Input Form */
            <form id="contact-form" onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* 성함 / 상호명 */}
              <div id="form-group-name" className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-semibold text-zinc-900"
                >
                  성함 / 상호명 <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="예: 홍길동 (카페 모던)"
                  className={`w-full px-4 py-3 text-sm rounded-xl border bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? 'border-rose-400 focus:ring-rose-200'
                      : 'border-zinc-200 focus:border-zinc-400 focus:ring-zinc-100'
                  }`}
                  required
                />
                {errors.name && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* 연락처 */}
              <div id="form-group-contact" className="space-y-2">
                <label
                  htmlFor="contact-contact"
                  className="block text-sm font-semibold text-zinc-900"
                >
                  연락처 (휴대폰 번호 또는 이메일) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact-contact"
                  name="contact"
                  value={formData.contact}
                  onChange={(e) => {
                    setFormData({ ...formData, contact: e.target.value });
                    if (errors.contact) setErrors({ ...errors, contact: undefined });
                  }}
                  placeholder="예: 010-1234-5678 또는 ceo@brand.com"
                  className={`w-full px-4 py-3 text-sm rounded-xl border bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.contact
                      ? 'border-rose-400 focus:ring-rose-200'
                      : 'border-zinc-200 focus:border-zinc-400 focus:ring-zinc-100'
                  }`}
                  required
                />
                {errors.contact && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.contact}</span>
                  </p>
                )}
              </div>

              {/* 만들고자 하는 사이트 요약 또는 참고 링크 */}
              <div id="form-group-message" className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-semibold text-zinc-900"
                >
                  만들고자 하는 사이트 요약 또는 참고 링크 <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="예: 깔끔한 브랜드 소개 및 서비스 예약 페이지가 필요합니다. 참고하고 싶은 사이트 링크는 https://... 입니다."
                  className={`w-full px-4 py-3 text-sm rounded-xl border bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 resize-y transition-all ${
                    errors.message
                      ? 'border-rose-400 focus:ring-rose-200'
                      : 'border-zinc-200 focus:border-zinc-400 focus:ring-zinc-100'
                  }`}
                  required
                />
                {errors.message && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="contact-submit-btn"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-zinc-900 hover:bg-zinc-800 disabled:bg-zinc-600 rounded-xl transition-all shadow-sm active:scale-[0.99] cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>신청서 전송 중...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>프로젝트 상담 신청하기</span>
                  </>
                )}
              </button>

              {/* Footnote */}
              <div className="pt-2 text-center">
                <p
                  id="contact-footnote"
                  className="text-xs text-zinc-500 font-medium flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>접수 후 24시간 내 남겨주신 연락처로 친절히 안내해 드립니다.</span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
