import { ArrowLeft, Clock, MapPin, User } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface JadwalPageProps {
  onBack: () => void;
}

export function JadwalPage({ onBack }: JadwalPageProps) {
  const jadwalHariIni = [
    { waktu: '07:00 - 07:45', mapel: 'Matematika', guru: 'Pak Budi Santoso', ruang: 'Ruang 10A' },
    { waktu: '07:45 - 08:30', mapel: 'Bahasa Indonesia', guru: 'Bu Siti Aminah', ruang: 'Ruang 10A' },
    { waktu: '08:30 - 09:15', mapel: 'Bahasa Inggris', guru: 'Mrs. Sarah Johnson', ruang: 'Ruang 10A' },
    { waktu: '09:15 - 09:30', mapel: 'ISTIRAHAT', guru: '-', ruang: '-', isBreak: true },
    { waktu: '09:30 - 10:15', mapel: 'Fisika', guru: 'Pak Ahmad Dahlan', ruang: 'Lab Fisika' },
    { waktu: '10:15 - 11:00', mapel: 'Kimia', guru: 'Bu Dewi Kusuma', ruang: 'Lab Kimia' },
    { waktu: '11:00 - 11:45', mapel: 'Biologi', guru: 'Pak Rudi Hartono', ruang: 'Ruang 10A' },
    { waktu: '11:45 - 12:30', mapel: 'ISTIRAHAT', guru: '-', ruang: '-', isBreak: true },
    { waktu: '12:30 - 13:15', mapel: 'Sejarah', guru: 'Bu Ratna Sari', ruang: 'Ruang 10A' },
    { waktu: '13:15 - 14:00', mapel: 'Geografi', guru: 'Pak Eko Prasetyo', ruang: 'Ruang 10A' },
    { waktu: '14:00 - 14:45', mapel: 'Sosiologi', guru: 'Bu Maya Anggraini', ruang: 'Ruang 10A' },
  ];

  const jadwalMinggu = {
    'Senin': jadwalHariIni,
    'Selasa': jadwalHariIni,
    'Rabu': jadwalHariIni,
    'Kamis': jadwalHariIni,
    'Jumat': jadwalHariIni.slice(0, 6), // Jumat lebih pendek
    'Sabtu': [],
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-cyan-600 to-cyan-500 text-white px-6 py-4">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-1 hover:bg-white/20 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-xl m-0">Jadwal Pelajaran</h2>
            <p className="text-sm text-white/90 m-0 mt-1">Kelas 10A - Semester Ganjil 2025/2026</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        <Tabs defaultValue="hari-ini" className="h-full flex flex-col">
          <TabsList className="w-full rounded-none border-b bg-white px-6">
            <TabsTrigger value="hari-ini" className="flex-1">Hari Ini</TabsTrigger>
            <TabsTrigger value="minggu-ini" className="flex-1">Minggu Ini</TabsTrigger>
          </TabsList>

          <TabsContent value="hari-ini" className="flex-1 overflow-y-auto px-6 py-4 mt-0">
            <div className="mb-4">
              <h3 className="mb-1">Sabtu, 08 November 2025</h3>
              <p className="text-sm text-gray-600 m-0">{jadwalHariIni.length - 2} mata pelajaran hari ini</p>
            </div>

            <div className="space-y-3">
              {jadwalHariIni.map((jadwal, index) => (
                <Card key={index} className={`p-4 ${jadwal.isBreak ? 'bg-amber-50 border-amber-200' : ''}`}>
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center min-w-[60px]">
                      <Clock className={`w-5 h-5 mb-1 ${jadwal.isBreak ? 'text-amber-600' : 'text-cyan-600'}`} />
                      <span className="text-xs text-center text-gray-600">{jadwal.waktu.split(' - ')[0]}</span>
                      <span className="text-xs text-gray-400">-</span>
                      <span className="text-xs text-center text-gray-600">{jadwal.waktu.split(' - ')[1]}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className={`m-0 mb-1 ${jadwal.isBreak ? 'text-amber-700' : ''}`}>{jadwal.mapel}</h4>
                      {!jadwal.isBreak && (
                        <>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                            <User className="w-4 h-4" />
                            <span>{jadwal.guru}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>{jadwal.ruang}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="minggu-ini" className="flex-1 overflow-y-auto px-6 py-4 mt-0">
            <div className="space-y-6">
              {Object.entries(jadwalMinggu).map(([hari, jadwal]) => (
                <div key={hari}>
                  <h3 className="mb-3 flex items-center justify-between">
                    {hari}
                    <span className="text-sm text-gray-500">
                      {jadwal.length === 0 ? 'Libur' : `${jadwal.filter(j => !j.isBreak).length} pelajaran`}
                    </span>
                  </h3>
                  {jadwal.length === 0 ? (
                    <Card className="p-4 bg-gray-50 text-center">
                      <p className="text-gray-500 m-0">Tidak ada jadwal</p>
                    </Card>
                  ) : (
                    <div className="space-y-2">
                      {jadwal.filter(j => !j.isBreak).map((item, idx) => (
                        <Card key={idx} className="p-3">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="m-0 text-sm">{item.mapel}</h4>
                            <span className="text-xs text-gray-500">{item.waktu}</span>
                          </div>
                          <p className="text-xs text-gray-600 m-0">{item.guru}</p>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
