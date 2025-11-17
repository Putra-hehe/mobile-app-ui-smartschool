import { ArrowLeft, Calendar, MapPin, Clock, Users, TrendingUp } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface EventPageProps {
  onBack: () => void;
}

export function EventPage({ onBack }: EventPageProps) {
  const upcomingEvents = [
    {
      title: 'Ujian Tengah Semester',
      date: '15 November 2025',
      time: '07:00 - 12:00 WIB',
      location: 'Semua Ruang Kelas',
      category: 'akademik',
      participants: 'Semua Siswa',
      description: 'Ujian Tengah Semester Ganjil tahun ajaran 2025/2026. Pastikan membawa alat tulis dan kartu ujian.'
    },
    {
      title: 'Lomba Karya Ilmiah Remaja',
      date: '20 November 2025',
      time: '08:00 - 15:00 WIB',
      location: 'Aula Utama',
      category: 'kompetisi',
      participants: 'Tim Terdaftar',
      description: 'Kompetisi Karya Ilmiah Remaja tingkat sekolah. Pendaftaran dibuka hingga 18 November.'
    },
    {
      title: 'Pelatihan OSIS',
      date: '25 November 2025',
      time: '13:00 - 16:00 WIB',
      location: 'Ruang OSIS',
      category: 'organisasi',
      participants: 'Pengurus OSIS',
      description: 'Pelatihan kepemimpinan dan manajemen organisasi untuk pengurus OSIS periode 2025/2026.'
    },
    {
      title: 'Donor Darah',
      date: '28 November 2025',
      time: '08:00 - 14:00 WIB',
      location: 'Lapangan Sekolah',
      category: 'sosial',
      participants: 'Umum (min 17 tahun)',
      description: 'Kegiatan donor darah bekerja sama dengan PMI Yogyakarta. Daftar di ruang UKS.'
    }
  ];

  const pastEvents = [
    {
      title: 'Upacara Hari Pahlawan',
      date: '10 November 2025',
      time: '07:00 - 08:00 WIB',
      location: 'Lapangan Upacara',
      category: 'nasional',
      status: 'selesai'
    },
    {
      title: 'Kunjungan Industri',
      date: '05 November 2025',
      time: '07:00 - 16:00 WIB',
      location: 'PT. Telkom Indonesia',
      category: 'akademik',
      status: 'selesai'
    },
    {
      title: 'Webinar Karir',
      date: '01 November 2025',
      time: '13:00 - 15:00 WIB',
      location: 'Online (Zoom)',
      category: 'akademik',
      status: 'selesai'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      akademik: 'bg-blue-100 text-blue-700',
      kompetisi: 'bg-amber-100 text-amber-700',
      organisasi: 'bg-purple-100 text-purple-700',
      sosial: 'bg-green-100 text-green-700',
      nasional: 'bg-red-100 text-red-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
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
            <h2 className="text-xl m-0">Event Sekolah</h2>
            <p className="text-sm text-white/90 m-0 mt-1">Kegiatan dan acara mendatang</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        <Tabs defaultValue="upcoming" className="h-full flex flex-col">
          <TabsList className="w-full rounded-none border-b bg-white px-6">
            <TabsTrigger value="upcoming" className="flex-1">Mendatang</TabsTrigger>
            <TabsTrigger value="past" className="flex-1">Selesai</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="flex-1 overflow-y-auto px-6 py-4 mt-0">
            <div className="mb-4">
              <p className="text-sm text-gray-600 m-0">{upcomingEvents.length} event akan datang</p>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="m-0 flex-1">{event.title}</h3>
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{event.participants}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 m-0 mb-3">
                    {event.description}
                  </p>

                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm transition-colors">
                      Daftar Sekarang
                    </button>
                    <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg text-sm transition-colors">
                      Detail
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="flex-1 overflow-y-auto px-6 py-4 mt-0">
            <div className="mb-4">
              <p className="text-sm text-gray-600 m-0">{pastEvents.length} event telah selesai</p>
            </div>

            <div className="space-y-3">
              {pastEvents.map((event, index) => (
                <Card key={index} className="p-4 opacity-75">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="m-0 flex-1">{event.title}</h4>
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>

                  <div className="space-y-1 mb-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Selesai</span>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Quick Stats */}
      <div className="border-t border-gray-200 px-6 py-3 bg-gray-50">
        <div className="flex items-center justify-around text-center">
          <div>
            <p className="text-2xl text-cyan-600 m-0">{upcomingEvents.length}</p>
            <p className="text-xs text-gray-600 m-0">Mendatang</p>
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div>
            <p className="text-2xl text-gray-600 m-0">{pastEvents.length}</p>
            <p className="text-xs text-gray-600 m-0">Selesai</p>
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div>
            <p className="text-2xl text-purple-600 m-0">2</p>
            <p className="text-xs text-gray-600 m-0">Terdaftar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
