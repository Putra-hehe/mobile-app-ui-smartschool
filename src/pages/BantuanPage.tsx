import { ArrowLeft, Phone, Mail, MessageCircle, Clock, MapPin, HelpCircle } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

interface BantuanPageProps {
  onBack: () => void;
}

export function BantuanPage({ onBack }: BantuanPageProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-cyan-600 to-cyan-500 text-white px-6 py-4">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-1 hover:bg-white/20 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-xl m-0">Bantuan & Dukungan</h2>
            <p className="text-sm text-white/90 m-0 mt-1">Kami siap membantu Anda</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {/* Contact Methods */}
        <div className="mb-6">
          <h3 className="mb-4">Hubungi Kami</h3>
          <div className="space-y-3">
            <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="m-0 mb-1">Telepon</h4>
                  <p className="text-sm text-gray-600 m-0">0274-512345</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="m-0 mb-1">Email</h4>
                  <p className="text-sm text-gray-600 m-0">admin@sman6jogja.sch.id</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h4 className="m-0 mb-1">WhatsApp</h4>
                  <p className="text-sm text-gray-600 m-0">0812-3456-7890</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Office Hours */}
        <div className="mb-6">
          <h3 className="mb-4">Jam Operasional</h3>
          <Card className="p-4">
            <div className="flex gap-3 mb-4">
              <Clock className="w-5 h-5 text-cyan-600 shrink-0" />
              <div className="flex-1">
                <h4 className="m-0 mb-2">Kantor Administrasi</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p className="m-0">Senin - Jumat: 07:00 - 15:00 WIB</p>
                  <p className="m-0">Sabtu: 07:00 - 12:00 WIB</p>
                  <p className="m-0">Minggu & Libur: Tutup</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-cyan-600 shrink-0" />
              <div className="flex-1">
                <h4 className="m-0 mb-1">Lokasi</h4>
                <p className="text-sm text-gray-600 m-0">
                  Jl. C. Simanjuntak No. 2, Terban, Gondokusuman, Yogyakarta 55223
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Quick Links */}
        <div className="mb-6">
          <h3 className="mb-4">Pertanyaan Populer</h3>
          <div className="space-y-2">
            <Card className="p-3 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-gray-400" />
                <span className="text-sm">Cara mengajukan izin tidak masuk?</span>
              </div>
            </Card>
            <Card className="p-3 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-gray-400" />
                <span className="text-sm">Bagaimana jika lupa password?</span>
              </div>
            </Card>
            <Card className="p-3 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-gray-400" />
                <span className="text-sm">Lokasi tidak terdeteksi?</span>
              </div>
            </Card>
            <Card className="p-3 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-gray-400" />
                <span className="text-sm">Cara melihat riwayat presensi?</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-6">
          <h3 className="mb-4">Kirim Pesan</h3>
          <Card className="p-4">
            <form className="space-y-4">
              <div>
                <Label htmlFor="subject">Subjek</Label>
                <Input id="subject" placeholder="Masalah presensi tidak tercatat" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="message">Pesan</Label>
                <Textarea
                  id="message"
                  placeholder="Jelaskan masalah yang Anda alami..."
                  rows={4}
                  className="mt-1 resize-none"
                />
              </div>
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                Kirim Pesan
              </Button>
            </form>
          </Card>
        </div>

        {/* App Info */}
        <div className="mb-6">
          <h3 className="mb-4">Informasi Aplikasi</h3>
          <Card className="p-4 bg-gray-50">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Versi Aplikasi</span>
                <span className="text-gray-900">1.2.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Terakhir Update</span>
                <span className="text-gray-900">01 Nov 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Developer</span>
                <span className="text-gray-900">SMAN 6 Yogyakarta</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Emergency Contact */}
        <Card className="p-4 bg-red-50 border-red-200 mb-6">
          <h4 className="m-0 mb-2 text-red-900">🚨 Kontak Darurat</h4>
          <p className="text-sm text-red-900 m-0 mb-3">
            Untuk masalah mendesak atau darurat, hubungi:
          </p>
          <div className="space-y-1 text-sm text-red-900">
            <p className="m-0">Guru Piket: 0812-xxxx-xxxx</p>
            <p className="m-0">Satpam Sekolah: 0813-xxxx-xxxx</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
