import { useState } from 'react';
import { Home, Calendar, GraduationCap, MessageSquare, Settings, MoreVertical, Plus, ArrowRight, ArrowLeft, CalendarCheck, TrendingUp, BookOpen, HelpCircle, CalendarIcon } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from './components/ui/dialog';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group';
import { Calendar as CalendarComponent } from './components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover';
import { RiwayatPage } from './pages/RiwayatPage';
import { JadwalPage } from './pages/JadwalPage';
import { PanduanPage } from './pages/PanduanPage';
import { BantuanPage } from './pages/BantuanPage';
import { EventPage } from './pages/EventPage';
import { StatusPage } from './pages/StatusPage';
import { SettingsPage } from './pages/SettingsPage';
import { toast } from 'sonner@2.0.3';
import { Toaster } from './components/ui/sonner';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

type Page = 'home' | 'riwayat' | 'jadwal' | 'panduan' | 'bantuan' | 'event' | 'status' | 'settings';

interface AttendanceData {
  hadir: number;
  izin: number;
  sakit: number;
  alfa: number;
}

interface IzinRecord {
  id: string;
  tanggal: string;
  jenis: 'izin' | 'sakit';
  alasan: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [activeBottomTab, setActiveBottomTab] = useState<'home' | 'event' | 'eschool' | 'status' | 'settings'>('home');
  
  // Attendance state
  const [absenMasuk, setAbsenMasuk] = useState(false);
  const [absenPulang, setAbsenPulang] = useState(false);
  const [jamMasuk, setJamMasuk] = useState('');
  const [jamPulang, setJamPulang] = useState('');
  const [showAbsenDialog, setShowAbsenDialog] = useState(false);
  const [absenType, setAbsenType] = useState<'masuk' | 'pulang'>('masuk');
  
  // Izin state
  const [showIzinDialog, setShowIzinDialog] = useState(false);
  const [izinType, setIzinType] = useState<'izin' | 'sakit'>('izin');
  const [alasanIzin, setAlasanIzin] = useState('');
  const [tanggalIzin, setTanggalIzin] = useState<Date | undefined>(undefined);
  const [izinRecords, setIzinRecords] = useState<IzinRecord[]>([]);
  
  // Monthly attendance data
  const [attendanceData, setAttendanceData] = useState<AttendanceData>({
    hadir: 0,
    izin: 0,
    sakit: 0,
    alfa: 0
  });

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const handleBottomNavClick = (tab: 'home' | 'event' | 'eschool' | 'status' | 'settings') => {
    setActiveBottomTab(tab);
    if (tab === 'home') setCurrentPage('home');
    else if (tab === 'event') setCurrentPage('event');
    else if (tab === 'status') setCurrentPage('status');
    else if (tab === 'settings') setCurrentPage('settings');
  };

  const handleAbsenClick = (type: 'masuk' | 'pulang') => {
    setAbsenType(type);
    setShowAbsenDialog(true);
  };

  const handleConfirmAbsen = () => {
    const now = new Date();
    const time = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    
    if (absenType === 'masuk') {
      setAbsenMasuk(true);
      setJamMasuk(time);
      toast.success('Absen masuk berhasil!', {
        description: `Tercatat pada ${time}`
      });
    } else {
      setAbsenPulang(true);
      setJamPulang(time);
      
      // Update attendance data when both check in and check out are done
      setAttendanceData(prev => ({
        ...prev,
        hadir: prev.hadir + 1
      }));
      
      toast.success('Absen pulang berhasil!', {
        description: `Tercatat pada ${time}`
      });
    }
    setShowAbsenDialog(false);
  };

  const handleIzinSubmit = () => {
    setShowIzinDialog(true);
  };

  const handleConfirmIzin = () => {
    if (!tanggalIzin) {
      toast.error('Mohon pilih tanggal izin!');
      return;
    }

    if (!alasanIzin.trim()) {
      toast.error('Mohon isi alasan ketidakhadiran!');
      return;
    }

    // Format the selected date
    const tanggalFormatted = format(tanggalIzin, "EEEE, d MMMM yyyy", { locale: id });

    // Add new izin record
    const newRecord: IzinRecord = {
      id: Date.now().toString(),
      tanggal: tanggalFormatted,
      jenis: izinType,
      alasan: alasanIzin.trim()
    };

    setIzinRecords(prev => [newRecord, ...prev]);

    if (izinType === 'izin') {
      setAttendanceData(prev => ({
        ...prev,
        izin: prev.izin + 1
      }));
    } else {
      setAttendanceData(prev => ({
        ...prev,
        sakit: prev.sakit + 1
      }));
    }
    
    toast.success('Surat berhasil diajukan!', {
      description: `${izinType === 'izin' ? 'Izin' : 'Sakit'} pada ${tanggalFormatted}`
    });
    
    setShowIzinDialog(false);
    setAlasanIzin('');
    setTanggalIzin(undefined);
    setIzinType('izin');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'riwayat':
        return <RiwayatPage onBack={() => setCurrentPage('home')} attendanceData={attendanceData} izinRecords={izinRecords} />;
      case 'jadwal':
        return <JadwalPage onBack={() => setCurrentPage('home')} />;
      case 'panduan':
        return <PanduanPage onBack={() => setCurrentPage('home')} />;
      case 'bantuan':
        return <BantuanPage onBack={() => setCurrentPage('home')} />;
      case 'event':
        return <EventPage onBack={() => setCurrentPage('home')} />;
      case 'status':
        return <StatusPage onBack={() => setCurrentPage('home')} />;
      case 'settings':
        return <SettingsPage onBack={() => setCurrentPage('home')} />;
      case 'home':
      default:
        return (
          <div className="flex-1 overflow-y-auto">
            {/* Header */}
            <div className="bg-white px-6 pt-6 pb-4 border-b shrink-0">
              <h1 className="text-black m-0">Smartschool</h1>
              <p className="text-gray-600 text-sm m-0 mt-1">SMAN 6 YOGYAKARTA</p>
            </div>

            {/* Content Area */}
            <div className="px-6 pt-4 pb-24">
              {/* Presensi Card */}
              <Card className="p-5 mb-4 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="m-0 mb-1">Presensi harian siswa</h3>
                    <p className="text-gray-600 text-sm m-0">Sabtu, 08 November 2025</p>
                  </div>
                  <button className="text-gray-600 hover:text-gray-800">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white py-6"
                    onClick={() => handleAbsenClick('masuk')}
                    disabled={absenMasuk}
                  >
                    {absenMasuk ? '✓ Sudah Absen' : 'Absen masuk'}
                  </Button>
                  <Button 
                    className="bg-cyan-500 hover:bg-cyan-600 text-white py-6"
                    onClick={() => handleAbsenClick('pulang')}
                    disabled={!absenMasuk || absenPulang}
                  >
                    {absenPulang ? '✓ Sudah Absen' : 'Absen pulang'}
                  </Button>
                </div>

                <button 
                  className="w-full border-2 border-dashed border-gray-300 rounded-lg py-4 flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={handleIzinSubmit}
                >
                  <Plus className="w-5 h-5" />
                  <span>Ajukan surat ijin</span>
                </button>
              </Card>

              {/* Icon Menu */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <button 
                  className="flex flex-col items-center"
                  onClick={() => handleNavigate('jadwal')}
                >
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-2 hover:bg-cyan-600 transition-colors">
                    <CalendarCheck className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">Jadwal</span>
                </button>
                <button 
                  className="flex flex-col items-center"
                  onClick={() => handleNavigate('riwayat')}
                >
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-2 hover:bg-cyan-600 transition-colors">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">Riwayat</span>
                </button>
                <button 
                  className="flex flex-col items-center"
                  onClick={() => handleNavigate('panduan')}
                >
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-2 hover:bg-cyan-600 transition-colors">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">Panduan</span>
                </button>
                <button 
                  className="flex flex-col items-center"
                  onClick={() => handleNavigate('bantuan')}
                >
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-2 hover:bg-cyan-600 transition-colors">
                    <HelpCircle className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">Bantuan</span>
                </button>
              </div>

              {/* Warning Message */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-5">
                <h4 className="m-0 mb-2 text-gray-900">Jangan lupa presensi ya !</h4>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Karena sekolahmu bisa saja menerapkan aturan jika Tidak Presensi, maka otomatis Kamu mendapat Poin Pelanggaran
                </p>
              </div>

              {/* Riwayat Presensi */}
              <div>
                <h3 className="mb-3">Riwayat presensi harian</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-gray-700" />
                      <span className="text-gray-700">Absen masuk</span>
                    </div>
                    <span className={`text-sm ${absenMasuk ? 'text-green-600' : 'text-gray-600'}`}>
                      {absenMasuk ? jamMasuk : 'Belum presensi'}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <ArrowLeft className="w-5 h-5 text-gray-700" />
                      <span className="text-gray-700">Absen pulang</span>
                    </div>
                    <span className={`text-sm ${absenPulang ? 'text-green-600' : 'text-gray-600'}`}>
                      {absenPulang ? jamPulang : 'Belum presensi'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Mobile Frame */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col" style={{ height: '844px' }}>
        {/* Status Bar */}
        <div className="bg-gray-700 text-white px-6 py-2 flex items-center justify-between shrink-0">
          <span className="text-sm">13.27</span>
          <div className="flex items-center gap-1">
            <span className="text-xs">📶 📡 🔋</span>
            <span className="text-sm">13%</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {renderContent()}
        </div>

        {/* Bottom Navigation */}
        {currentPage === 'home' && (
          <div className="bg-white border-t border-gray-200 px-4 py-3 shrink-0">
            <div className="flex items-center justify-around">
              <button 
                className="flex flex-col items-center gap-1"
                onClick={() => handleBottomNavClick('home')}
              >
                <Home className={`w-6 h-6 ${activeBottomTab === 'home' ? 'text-cyan-500' : 'text-gray-400'}`} />
                <span className={`text-xs ${activeBottomTab === 'home' ? 'text-cyan-500' : 'text-gray-400'}`}>Beranda</span>
              </button>
              <button 
                className="flex flex-col items-center gap-1"
                onClick={() => handleBottomNavClick('event')}
              >
                <Calendar className={`w-6 h-6 ${activeBottomTab === 'event' ? 'text-cyan-500' : 'text-gray-400'}`} />
                <span className={`text-xs ${activeBottomTab === 'event' ? 'text-cyan-500' : 'text-gray-400'}`}>Event</span>
              </button>
              <button className="flex flex-col items-center gap-1 -mt-8">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-600 transition-colors">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <span className="text-xs text-gray-700 mt-1">E-School</span>
              </button>
              <button 
                className="flex flex-col items-center gap-1"
                onClick={() => handleBottomNavClick('status')}
              >
                <MessageSquare className={`w-6 h-6 ${activeBottomTab === 'status' ? 'text-cyan-500' : 'text-gray-400'}`} />
                <span className={`text-xs ${activeBottomTab === 'status' ? 'text-cyan-500' : 'text-gray-400'}`}>Status</span>
              </button>
              <button 
                className="flex flex-col items-center gap-1"
                onClick={() => handleBottomNavClick('settings')}
              >
                <Settings className={`w-6 h-6 ${activeBottomTab === 'settings' ? 'text-cyan-500' : 'text-gray-400'}`} />
                <span className={`text-xs ${activeBottomTab === 'settings' ? 'text-cyan-500' : 'text-gray-400'}`}>Settings</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Absen Dialog */}
      <Dialog open={showAbsenDialog} onOpenChange={setShowAbsenDialog}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>
              Konfirmasi Absen {absenType === 'masuk' ? 'Masuk' : 'Pulang'}
            </DialogTitle>
            <DialogDescription>
              Pastikan Anda berada di lokasi yang tepat dan kamera Anda siap.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-sm text-gray-500">📸 Kamera Selfie</p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="m-0">⏰ Waktu: {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB</p>
              <p className="m-0">📍 Lokasi: SMAN 6 Yogyakarta</p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAbsenDialog(false)}>
              Batal
            </Button>
            <Button onClick={handleConfirmAbsen} className="bg-cyan-600 hover:bg-cyan-700">
              Konfirmasi
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Izin Dialog */}
      <Dialog open={showIzinDialog} onOpenChange={setShowIzinDialog}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>
              Ajukan Surat Izin/Sakit
            </DialogTitle>
            <DialogDescription>
              Isi formulir ketidakhadiran Anda dengan lengkap.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {/* Jenis Surat */}
            <div className="space-y-2">
              <Label className="text-sm">Jenis Ketidakhadiran</Label>
              <RadioGroup
                className="flex flex-col space-y-2"
                value={izinType}
                onValueChange={(value) => setIzinType(value as 'izin' | 'sakit')}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="izin" id="izin" />
                  <Label htmlFor="izin" className="text-sm cursor-pointer">Izin</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sakit" id="sakit" />
                  <Label htmlFor="sakit" className="text-sm cursor-pointer">Sakit</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Tanggal */}
            <div className="space-y-2">
              <Label className="text-sm">Tanggal Ketidakhadiran</Label>
              <Popover>
                <PopoverTrigger className="w-full inline-flex items-center justify-start gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{tanggalIzin ? format(tanggalIzin, "EEEE, d MMMM yyyy", { locale: id }) : 'Pilih tanggal'}</span>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={tanggalIzin}
                    onSelect={setTanggalIzin}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Alasan */}
            <div className="space-y-2">
              <Label className="text-sm">Alasan Ketidakhadiran</Label>
              <Textarea
                className="resize-none min-h-[100px]"
                placeholder="Tulis alasan ketidakhadiran Anda..."
                value={alasanIzin}
                onChange={(e) => setAlasanIzin(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowIzinDialog(false)}>
              Batal
            </Button>
            <Button onClick={handleConfirmIzin} className="bg-cyan-600 hover:bg-cyan-700">
              Ajukan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  );
}