import { ArrowLeft, User, Bell, Lock, Globe, Palette, HelpCircle, LogOut, ChevronRight, Smartphone, Shield, Database, Moon } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Switch } from '../components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Separator } from '../components/ui/separator';

interface SettingsPageProps {
  onBack: () => void;
}

export function SettingsPage({ onBack }: SettingsPageProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-cyan-600 to-cyan-500 text-white px-6 py-4">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-1 hover:bg-white/20 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-xl m-0">Pengaturan</h2>
            <p className="text-sm text-white/90 m-0 mt-1">Kelola akun dan preferensi</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Profile Section */}
        <div className="px-6 py-4 bg-gray-50 border-b">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="" />
              <AvatarFallback className="bg-cyan-600 text-white text-xl">AS</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="m-0 mb-1">Ahmad Syarif</h3>
              <p className="text-sm text-gray-600 m-0">NIS: 2025001234</p>
              <p className="text-sm text-gray-600 m-0">Kelas 10A</p>
            </div>
            <button className="p-2 hover:bg-white rounded-full transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Account Settings */}
        <div className="px-6 py-4">
          <h4 className="text-sm text-gray-500 mb-3 uppercase tracking-wide">Akun</h4>
          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <User className="w-5 h-5 text-gray-600" />
              <span className="flex-1 text-left">Edit Profil</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <Lock className="w-5 h-5 text-gray-600" />
              <span className="flex-1 text-left">Ubah Password</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <Shield className="w-5 h-5 text-gray-600" />
              <span className="flex-1 text-left">Keamanan & Privasi</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        <Separator />

        {/* Notification Settings */}
        <div className="px-6 py-4">
          <h4 className="text-sm text-gray-500 mb-3 uppercase tracking-wide">Notifikasi</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="m-0">Notifikasi Push</p>
                  <p className="text-xs text-gray-500 m-0">Terima pemberitahuan penting</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="m-0">Notifikasi Tugas</p>
                  <p className="text-xs text-gray-500 m-0">Pengingat deadline tugas</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="m-0">Notifikasi Event</p>
                  <p className="text-xs text-gray-500 m-0">Info acara sekolah</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        <Separator />

        {/* Appearance Settings */}
        <div className="px-6 py-4">
          <h4 className="text-sm text-gray-500 mb-3 uppercase tracking-wide">Tampilan</h4>
          <div className="space-y-1">
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Moon className="w-5 h-5 text-gray-600" />
                <span>Mode Gelap</span>
              </div>
              <Switch />
            </div>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <Globe className="w-5 h-5 text-gray-600" />
              <span className="flex-1 text-left">Bahasa</span>
              <span className="text-sm text-gray-500">Indonesia</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <Palette className="w-5 h-5 text-gray-600" />
              <span className="flex-1 text-left">Tema Warna</span>
              <span className="text-sm text-gray-500">Cyan</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        <Separator />

        {/* App Settings */}
        <div className="px-6 py-4">
          <h4 className="text-sm text-gray-500 mb-3 uppercase tracking-wide">Aplikasi</h4>
          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <Smartphone className="w-5 h-5 text-gray-600" />
              <span className="flex-1 text-left">Versi Aplikasi</span>
              <span className="text-sm text-gray-500">1.2.0</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <Database className="w-5 h-5 text-gray-600" />
              <span className="flex-1 text-left">Kelola Penyimpanan</span>
              <span className="text-sm text-gray-500">12.5 MB</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-gray-600" />
                <span>Auto-sync Data</span>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        <Separator />

        {/* Support */}
        <div className="px-6 py-4">
          <h4 className="text-sm text-gray-500 mb-3 uppercase tracking-wide">Bantuan & Dukungan</h4>
          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <HelpCircle className="w-5 h-5 text-gray-600" />
              <span className="flex-1 text-left">Pusat Bantuan</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <FileText className="w-5 h-5 text-gray-600" />
              <span className="flex-1 text-left">Kebijakan Privasi</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <FileText className="w-5 h-5 text-gray-600" />
              <span className="flex-1 text-left">Syarat & Ketentuan</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        <Separator />

        {/* Logout */}
        <div className="px-6 py-4 pb-6">
          <button className="w-full flex items-center justify-center gap-3 p-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Keluar dari Akun</span>
          </button>
        </div>

        {/* Footer Info */}
        <div className="px-6 pb-6 text-center">
          <p className="text-xs text-gray-500 m-0">Smartschool v1.2.0</p>
          <p className="text-xs text-gray-500 m-0">© 2025 SMAN 6 Yogyakarta</p>
        </div>
      </div>
    </div>
  );
}

function FileText(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}
