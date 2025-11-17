import { ArrowLeft, CheckCircle2, Clock, MapPin, FileText, Camera, Wifi } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

interface PanduanPageProps {
  onBack: () => void;
}

export function PanduanPage({ onBack }: PanduanPageProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-cyan-600 to-cyan-500 text-white px-6 py-4">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-1 hover:bg-white/20 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-xl m-0">Panduan Aplikasi</h2>
            <p className="text-sm text-white/90 m-0 mt-1">Cara menggunakan Smartschool</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {/* Quick Start */}
        <div className="mb-6">
          <h3 className="mb-4">Memulai Presensi</h3>
          <div className="space-y-3">
            <Card className="p-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-cyan-700">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="m-0 mb-1">Pastikan GPS Aktif</h4>
                  <p className="text-sm text-gray-600 m-0">Aktifkan lokasi di pengaturan HP agar sistem dapat mendeteksi keberadaan Anda di area sekolah.</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-cyan-700">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="m-0 mb-1">Datang Tepat Waktu</h4>
                  <p className="text-sm text-gray-600 m-0">Batas waktu absen masuk adalah pukul 07:15 WIB. Pastikan Anda melakukan presensi sebelum batas waktu.</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-cyan-700">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="m-0 mb-1">Tekan Tombol Absen</h4>
                  <p className="text-sm text-gray-600 m-0">Tekan tombol "Absen Masuk" dan ambil foto selfie untuk verifikasi kehadiran.</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-cyan-700">4</span>
                </div>
                <div className="flex-1">
                  <h4 className="m-0 mb-1">Jangan Lupa Absen Pulang</h4>
                  <p className="text-sm text-gray-600 m-0">Absen pulang dapat dilakukan mulai pukul 15:00 WIB. Tekan tombol "Absen Pulang" sebelum meninggalkan sekolah.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-6">
          <h3 className="mb-4">Pertanyaan Umum</h3>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-1" className="border rounded-lg px-4">
              <AccordionTrigger>Bagaimana jika saya lupa absen?</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 m-0">
                  Jika Anda lupa melakukan presensi, segera hubungi guru wali kelas atau admin sekolah untuk melakukan koreksi data. Anda juga bisa mengajukan koreksi melalui menu Riwayat.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-4">
              <AccordionTrigger>Bagaimana cara mengajukan izin?</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 m-0 mb-2">
                  Untuk mengajukan izin:
                </p>
                <ol className="text-sm text-gray-600 space-y-1 pl-4">
                  <li>1. Tekan tombol "Ajukan surat ijin" di halaman utama</li>
                  <li>2. Pilih jenis izin (Sakit/Izin Pribadi/Kegiatan)</li>
                  <li>3. Isi alasan dan tanggal izin</li>
                  <li>4. Upload bukti pendukung (surat dokter, dll)</li>
                  <li>5. Kirim dan tunggu persetujuan</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-4">
              <AccordionTrigger>Apa yang terjadi jika terlambat?</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 m-0">
                  Jika Anda melakukan presensi setelah pukul 07:15, sistem akan mencatat sebagai "Terlambat". Keterlambatan akan tercatat dalam riwayat presensi Anda.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-4">
              <AccordionTrigger>Bagaimana jika lokasi tidak terdeteksi?</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 m-0 mb-2">
                  Pastikan:
                </p>
                <ul className="text-sm text-gray-600 space-y-1 pl-4">
                  <li>• GPS/Lokasi HP sudah aktif</li>
                  <li>• Anda berada dalam radius area sekolah</li>
                  <li>• Koneksi internet stabil</li>
                  <li>• Aplikasi memiliki izin akses lokasi</li>
                </ul>
                <p className="text-sm text-gray-600 m-0 mt-2">
                  Jika masih bermasalah, hubungi admin sekolah.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-4">
              <AccordionTrigger>Apakah bisa absen tanpa internet?</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 m-0">
                  Tidak, presensi memerlukan koneksi internet untuk mengirim data ke server. Pastikan Anda terhubung dengan WiFi sekolah atau menggunakan data seluler.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Icons Guide */}
        <div className="mb-6">
          <h3 className="mb-4">Panduan Ikon</h3>
          <Card className="p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <div className="flex-1">
                  <p className="text-sm m-0">Sudah Absen / Hadir</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-600" />
                <div className="flex-1">
                  <p className="text-sm m-0">Terlambat / Menunggu</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-600" />
                <div className="flex-1">
                  <p className="text-sm m-0">Lokasi / GPS</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <div className="flex-1">
                  <p className="text-sm m-0">Izin / Surat Keterangan</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-gray-600" />
                <div className="flex-1">
                  <p className="text-sm m-0">Foto Verifikasi</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Wifi className="w-5 h-5 text-gray-600" />
                <div className="flex-1">
                  <p className="text-sm m-0">Status Koneksi</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Tips */}
        <div className="mb-6">
          <h3 className="mb-4">Tips & Trik</h3>
          <Card className="p-4 bg-blue-50 border-blue-200">
            <h4 className="m-0 mb-2 text-blue-900">💡 Tips Penting</h4>
            <ul className="text-sm text-blue-900 space-y-2 pl-5 m-0">
              <li>Selalu cek riwayat presensi Anda secara berkala</li>
              <li>Ajukan izin minimal H-1 sebelum tanggal izin</li>
              <li>Simpan bukti presensi (screenshot) jika diperlukan</li>
              <li>Hubungi admin jika ada ketidaksesuaian data</li>
              <li>Pastikan foto profil Anda jelas untuk verifikasi</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
