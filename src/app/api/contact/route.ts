import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message, subject } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { status: 'error', message: 'Nama dan Nomor HP/WhatsApp wajib diisi' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      status: 'success',
      message: 'Pesan Anda telah diterima oleh Sales Executive KIA Semarang.',
      ticketId: `TKT-KIA-${Math.floor(10000 + Math.random() * 90000)}`,
      receivedData: {
        name,
        phone,
        subject: subject || 'Konsultasi Unit KIA',
        message: message || 'Tertarik dengan katalog unit KIA Semarang',
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Gagal memproses pesan', details: String(error) },
      { status: 400 }
    );
  }
}
