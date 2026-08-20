'use client';

import React, { useState } from 'react';
import { Code2, Play, Terminal, CheckCircle2, AlertCircle, Copy, RefreshCw } from 'lucide-react';

interface ApiEndpoint {
  id: string;
  name: string;
  method: 'GET' | 'POST';
  url: string;
  description: string;
  sampleBody?: string;
}

const ENDPOINTS: ApiEndpoint[] = [
  {
    id: 'get-cars-all',
    name: 'Get All Cars',
    method: 'GET',
    url: '/api/cars',
    description: 'Mengambil seluruh daftar mobil KIA OTR Semarang beserta spesifikasi utama.',
  },
  {
    id: 'get-cars-ev',
    name: 'Filter EV Only',
    method: 'GET',
    url: '/api/cars?category=EV',
    description: 'Mengambil daftar mobil KIA berkategori Electric Vehicle (EV6 & EV9).',
  },
  {
    id: 'get-cars-search',
    name: 'Search Car by Keyword',
    method: 'GET',
    url: '/api/cars?q=seltos',
    description: 'Mencari mobil KIA berdasarkan nama/deskripsi.',
  },
  {
    id: 'get-promos',
    name: 'Get Active Promos',
    method: 'GET',
    url: '/api/promos',
    description: 'Mengambil promo dan paket kredit terbaru Dealer KIA Semarang.',
  },
  {
    id: 'post-test-drive',
    name: 'Book Test Drive (POST)',
    method: 'POST',
    url: '/api/test-drive',
    description: 'Mengirim formulir reservasi test drive baru ke server.',
    sampleBody: JSON.stringify(
      {
        name: 'Ahmad Faisal',
        phone: '08123456789',
        email: 'ahmad@example.com',
        carId: 'kia-sonet',
        preferredDate: '2026-08-15',
        location: 'Showroom KIA Semarang',
        notes: 'Uji coba performa 1.5L IVT'
      },
      null,
      2
    ),
  },
  {
    id: 'post-contact',
    name: 'Send Inquiry (POST)',
    method: 'POST',
    url: '/api/contact',
    description: 'Mengirim pertanyaan/konsultasi ke tim Sales Executive KIA Semarang.',
    sampleBody: JSON.stringify(
      {
        name: 'Dewi Lestari',
        phone: '085712345678',
        subject: 'Tanya Angsuran KIA Sonet',
        message: 'Berapa simulasi DP 20% tenor 5 tahun untuk KIA Sonet?'
      },
      null,
      2
    ),
  },
];

export const ApiTesterSection: React.FC = () => {
  const [selectedApi, setSelectedApi] = useState<ApiEndpoint>(ENDPOINTS[0]);
  const [customBody, setCustomBody] = useState<string>(ENDPOINTS[0].sampleBody || '');
  const [loading, setLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  const [responseTime, setResponseTime] = useState<number | null>(null);
  const [responseData, setResponseData] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleEndpointSelect = (api: ApiEndpoint) => {
    setSelectedApi(api);
    setCustomBody(api.sampleBody || '');
    setResponseData(null);
    setResponseStatus(null);
    setResponseTime(null);
  };

  const handleRunApi = async () => {
    setLoading(true);
    const startTime = performance.now();
    try {
      const options: RequestInit = {
        method: selectedApi.method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (selectedApi.method === 'POST' && customBody) {
        options.body = customBody;
      }

      const res = await fetch(selectedApi.url, options);
      const endTime = performance.now();
      setResponseTime(Math.round(endTime - startTime));
      setResponseStatus(res.status);

      const json = await res.json();
      setResponseData(JSON.stringify(json, null, 2));
    } catch (err: any) {
      setResponseData(JSON.stringify({ error: err.message }, null, 2));
      setResponseStatus(500);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyResponse = () => {
    if (responseData) {
      navigator.clipboard.writeText(responseData);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="api-explorer" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Code2 className="w-4 h-4" />
            INTERACTIVE NEXT.JS API EXPLORER
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Uji Coba API Route{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Live Interactive
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Aplikasi ini dilengkapi dengan Next.js App Router API Endpoint bawaan. Anda dapat langsung memanggil API ini dan melihat respons JSON secara real-time.
          </p>
        </div>

        {/* API Playground Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
          {/* Left List of Endpoints */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2">
              Daftar Endpoint API Bawaan
            </h3>

            <div className="space-y-2">
              {ENDPOINTS.map((api) => {
                const isSelected = selectedApi.id === api.id;
                return (
                  <button
                    key={api.id}
                    onClick={() => handleEndpointSelect(api)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex flex-col gap-1.5 ${
                      isSelected
                        ? 'bg-red-600/15 border-red-500/60 shadow-lg'
                        : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">{api.name}</span>
                      <span
                        className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase ${
                          api.method === 'GET'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        }`}
                      >
                        {api.method}
                      </span>
                    </div>

                    <code className="text-xs text-gray-300 font-mono bg-black/40 px-2 py-1 rounded w-fit">
                      {api.url}
                    </code>

                    <p className="text-xs text-gray-400 line-clamp-1">{api.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Executor & Response Viewer */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              {/* Endpoint Header */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-black/40 border border-white/10">
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-black uppercase ${
                      selectedApi.method === 'GET'
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-amber-500/20 text-amber-400'
                    }`}
                  >
                    {selectedApi.method}
                  </span>
                  <code className="text-sm font-mono text-white font-bold">{selectedApi.url}</code>
                </div>

                <button
                  onClick={handleRunApi}
                  disabled={loading}
                  className="px-5 py-2 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-all flex items-center gap-2 shadow-lg disabled:opacity-50"
                >
                  {loading ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Play className="w-4 h-4 fill-current" />
                  )}
                  Eksekusi API
                </button>
              </div>

              {/* POST Request Body Input */}
              {selectedApi.method === 'POST' && (
                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider">
                    Request Payload (JSON Body)
                  </label>
                  <textarea
                    rows={6}
                    value={customBody}
                    onChange={(e) => setCustomBody(e.target.value)}
                    className="w-full p-4 rounded-2xl bg-[#090B10] border border-white/10 text-emerald-400 font-mono text-xs focus:outline-none focus:border-red-500"
                  />
                </div>
              )}

              {/* Response Header Info */}
              <div className="flex items-center justify-between text-xs text-gray-400 px-1">
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-gray-500" />
                  JSON Response Console
                </span>
                {responseStatus && (
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 font-mono text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      HTTP {responseStatus} OK
                    </span>
                    <span className="font-mono text-gray-400">{responseTime} ms</span>
                  </div>
                )}
              </div>

              {/* Response Code Block */}
              <div className="relative rounded-2xl bg-[#080A0F] border border-white/10 p-4 min-h-[220px] max-h-[360px] overflow-y-auto">
                {responseData ? (
                  <>
                    <button
                      onClick={handleCopyResponse}
                      className="absolute top-3 right-3 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
                      title="Copy JSON"
                    >
                      {copied ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <pre className="text-xs font-mono text-emerald-400 whitespace-pre-wrap">
                      {responseData}
                    </pre>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-48 text-gray-500 space-y-2">
                    <Terminal className="w-8 h-8 stroke-[1.5]" />
                    <p className="text-xs">Klik tombol "Eksekusi API" di atas untuk mencoba endpoint ini.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
