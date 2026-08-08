'use client';

import React, { useState } from 'react';
import { CARS_DATA } from '@/data/cars';
import { X, CalendarCheck, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface TestDriveModalProps {
  isOpen: boolean;
  preselectedCarId?: string;
  onClose: () => void;
}

export const TestDriveModal: React.FC<TestDriveModalProps> = ({
  isOpen,
  preselectedCarId,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carId: preselectedCarId || 'kia-ev9',
    preferredDate: '',
    location: 'Showroom KIA Semarang (Jl. Dr. Cipto)',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/test-drive', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok || json.status === 'error') {
        throw new Error(json.message || 'Gagal mengirim jadwal test drive');
      }

      setSuccessResponse(json);
    } catch (err: any) {
      setErrorMsg(err.message || 'Terjadi kesalahan sistem.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {successResponse ? (
          <div className="text-center py-6 space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase">
                Booking ID: {successResponse.data.bookingId}
              </span>
              <h3 className="text-2xl font-black text-gray-900">Jadwal Test Drive Terkonfirmasi!</h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                {successResponse.message}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-left text-xs space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span className="text-gray-500">Nama Pemesan:</span>
                <span className="font-semibold text-gray-900">{successResponse.data.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Unit Mobil:</span>
                <span className="font-semibold text-gray-900">{successResponse.data.carName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tanggal Rencana:</span>
                <span className="font-semibold text-gray-900">{successResponse.data.preferredDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Lokasi:</span>
                <span className="font-semibold text-gray-900">{successResponse.data.location}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setSuccessResponse(null);
                onClose();
              }}
              className="w-full py-3 rounded-xl font-bold text-white bg-black hover:bg-neutral-800 transition-all shadow-lg"
            >
              Selesai & Kembali
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-black text-white shadow-md">
                <CalendarCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900">Jadwalkan Test Drive</h3>
                <p className="text-xs text-gray-500">Layanan Test Drive GRATIS ke Rumah / Kantor Area Semarang</p>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 mb-4">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    No. WhatsApp / HP *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812xxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Pilih Mobil KIA *
                  </label>
                  <select
                    value={formData.carId}
                    onChange={(e) => setFormData({ ...formData, carId: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-sm"
                  >
                    {CARS_DATA.map((car) => (
                      <option key={car.id} value={car.id}>
                        {car.name} ({car.category})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Tanggal Rencana Test Drive *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Lokasi Test Drive
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-sm"
                >
                  <option value="Showroom KIA Semarang (Jl. Dr. Cipto)">
                    Showroom Official KIA Semarang
                  </option>
                  <option value="Home Test Drive (Rumah Pelanggan Area Semarang)">
                    Home Test Drive (Antar Unit ke Rumah)
                  </option>
                  <option value="Office Test Drive (Kantor Pelanggan)">
                    Office Test Drive (Antar Unit ke Kantor)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Contoh: Ingin mencoba fitur parkir otomatis..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-sm"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-black hover:bg-neutral-800 shadow-md flex items-center gap-2 transition-all active:scale-[0.99] disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Memproses...
                    </>
                  ) : (
                    <>
                      <CalendarCheck className="w-4 h-4" />
                      Kirim Jadwal (via API)
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
