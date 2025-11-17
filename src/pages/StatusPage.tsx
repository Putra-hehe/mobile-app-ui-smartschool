import { ArrowLeft, Bell, CheckCircle, AlertCircle, FileText, TrendingUp, Award, BookOpen } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Progress } from '../components/ui/progress';

interface StatusPageProps {
  onBack: () => void;
}

export function StatusPage({ onBack }: StatusPageProps) {
  const notifications = [
    {
      id: 1,
      type: 'tugas',
      title: 'Tugas Matematika',
      description: 'Deadline: Senin, 11 November 2025',
      status: 'pending',
      time: '2 jam yang lalu',
      urgent: true
    },
    {
      id: 2,
      type: 'pengumuman',
      title: 'Jadwal Ujian Tengah Semester',
      description: 'UTS akan dimulai tanggal 15 November 2025',
      status: 'info',
      time: '1 hari yang lalu',
      urgent: false
    },
    {
      id: 3,
      type: 'nilai',
      title: 'Nilai Ulangan Fisika',
      description: 'Nilai ulangan bab 3 sudah keluar',
      status: 'success',
      time: '2 hari yang lalu',
      urgent: false
    },
    {
      id: 4,
      type: 'presensi',
      title: 'Presensi Terlambat',
      description: 'Anda terlambat pada Kamis, 7 November',
      status: 'warning',
      time: '3 hari yang lalu',
      urgent: false
    }
  ];

  const akademikStatus = {
    tugasAktif: 3,
    tugasSelesai: 12,
    rataRataNilai: 85.5,
    kehadiran: 95,
    prestasi: 5
  };

  const tugasAktif = [
    {
      mapel: 'Matematika',
      judul: 'Soal Integral Parsial',
      deadline: '11 Nov 2025',
      progress: 60,
      status: 'progress'
    },
    {
      mapel: 'Bahasa Inggris',
      judul: 'Essay: My Future Career',
      deadline: '12 Nov 2025',
      progress: 30,
      status: 'progress'
    },
    {
      mapel: 'Fisika',
      judul: 'Laporan Praktikum Gerak Parabola',
      deadline: '13 Nov 2025',
      progress: 0,
      status: 'belum'
    }
  ];

  const nilaiTerbaru = [
    { mapel: 'Matematika', nilai: 88, keterangan: 'Ulangan Harian Bab 4' },
    { mapel: 'Fisika', nilai: 85, keterangan: 'Ulangan Harian Bab 3' },
    { mapel: 'Kimia', nilai: 90, keterangan: 'Praktikum Lab' },
    { mapel: 'Biologi', nilai: 82, keterangan: 'UTS' },
    { mapel: 'Bahasa Inggris', nilai: 87, keterangan: 'Speaking Test' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-amber-600" />;
      case 'info':
        return <Bell className="w-5 h-5 text-blue-600" />;
      default:
        return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  const getNilaiColor = (nilai: number) => {
    if (nilai >= 85) return 'text-green-600';
    if (nilai >= 75) return 'text-blue-600';
    if (nilai >= 65) return 'text-amber-600';
    return 'text-red-600';
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
            <h2 className="text-xl m-0">Status Akademik</h2>
            <p className="text-sm text-white/90 m-0 mt-1">Pantau perkembangan belajar Anda</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        <Tabs defaultValue="notifikasi" className="h-full flex flex-col">
          <TabsList className="w-full rounded-none border-b bg-white px-6">
            <TabsTrigger value="notifikasi" className="flex-1">Notifikasi</TabsTrigger>
            <TabsTrigger value="tugas" className="flex-1">Tugas</TabsTrigger>
            <TabsTrigger value="nilai" className="flex-1">Nilai</TabsTrigger>
          </TabsList>

          {/* Notifikasi Tab */}
          <TabsContent value="notifikasi" className="flex-1 overflow-y-auto px-6 py-4 mt-0">
            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <Card className="p-4 bg-blue-50 border-blue-200">
                <Bell className="w-8 h-8 text-blue-600 mb-2" />
                <p className="text-2xl text-blue-900 m-0">4</p>
                <p className="text-sm text-blue-700 m-0">Notifikasi Baru</p>
              </Card>
              <Card className="p-4 bg-amber-50 border-amber-200">
                <AlertCircle className="w-8 h-8 text-amber-600 mb-2" />
                <p className="text-2xl text-amber-900 m-0">1</p>
                <p className="text-sm text-amber-700 m-0">Perlu Perhatian</p>
              </Card>
            </div>

            {/* Notifications List */}
            <div className="space-y-3">
              {notifications.map((notif) => (
                <Card key={notif.id} className={`p-4 ${notif.urgent ? 'border-l-4 border-l-red-500' : ''}`}>
                  <div className="flex gap-3">
                    <div className="shrink-0 mt-1">
                      {getStatusIcon(notif.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="m-0">{notif.title}</h4>
                        {notif.urgent && (
                          <Badge className="bg-red-100 text-red-700">Urgent</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 m-0 mb-2">{notif.description}</p>
                      <p className="text-xs text-gray-500 m-0">{notif.time}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tugas Tab */}
          <TabsContent value="tugas" className="flex-1 overflow-y-auto px-6 py-4 mt-0">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <Card className="p-3 text-center">
                <p className="text-2xl text-cyan-600 m-0">{akademikStatus.tugasAktif}</p>
                <p className="text-xs text-gray-600 m-0">Aktif</p>
              </Card>
              <Card className="p-3 text-center">
                <p className="text-2xl text-green-600 m-0">{akademikStatus.tugasSelesai}</p>
                <p className="text-xs text-gray-600 m-0">Selesai</p>
              </Card>
              <Card className="p-3 text-center">
                <p className="text-2xl text-amber-600 m-0">1</p>
                <p className="text-xs text-gray-600 m-0">Terlambat</p>
              </Card>
            </div>

            <h3 className="mb-3">Tugas Aktif</h3>
            <div className="space-y-3">
              {tugasAktif.map((tugas, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <Badge className="bg-cyan-100 text-cyan-700 mb-2">{tugas.mapel}</Badge>
                      <h4 className="m-0 mb-1">{tugas.judul}</h4>
                      <p className="text-sm text-gray-600 m-0">Deadline: {tugas.deadline}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-cyan-600">{tugas.progress}%</span>
                    </div>
                    <Progress value={tugas.progress} className="h-2" />
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm transition-colors">
                      Kerjakan
                    </button>
                    <button className="px-3 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg text-sm transition-colors">
                      Detail
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Nilai Tab */}
          <TabsContent value="nilai" className="flex-1 overflow-y-auto px-6 py-4 mt-0">
            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <Card className="p-3 text-center bg-green-50 border-green-200">
                <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-1" />
                <p className="text-xl text-green-900 m-0">{akademikStatus.rataRataNilai}</p>
                <p className="text-xs text-green-700 m-0">Rata-rata</p>
              </Card>
              <Card className="p-3 text-center bg-blue-50 border-blue-200">
                <BookOpen className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                <p className="text-xl text-blue-900 m-0">{akademikStatus.kehadiran}%</p>
                <p className="text-xs text-blue-700 m-0">Kehadiran</p>
              </Card>
              <Card className="p-3 text-center bg-amber-50 border-amber-200">
                <Award className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                <p className="text-xl text-amber-900 m-0">{akademikStatus.prestasi}</p>
                <p className="text-xs text-amber-700 m-0">Prestasi</p>
              </Card>
            </div>

            <h3 className="mb-3">Nilai Terbaru</h3>
            <div className="space-y-3">
              {nilaiTerbaru.map((nilai, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="m-0">{nilai.mapel}</h4>
                    <span className={`text-2xl ${getNilaiColor(nilai.nilai)}`}>
                      {nilai.nilai}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 m-0">{nilai.keterangan}</p>
                  <div className="mt-2">
                    <Progress value={nilai.nilai} className="h-1" />
                  </div>
                </Card>
              ))}
            </div>

            <button className="w-full mt-4 px-4 py-3 border border-gray-300 hover:bg-gray-50 rounded-lg text-sm transition-colors">
              Lihat Semua Nilai
            </button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
