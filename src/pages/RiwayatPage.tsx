import { ArrowLeft } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Badge } from '../components/ui/badge';

interface IzinRecord {
  id: string;
  tanggal: string;
  jenis: 'izin' | 'sakit';
  alasan: string;
}

interface RiwayatPageProps {
  onBack: () => void;
  attendanceData: {
    hadir: number;
    izin: number;
    sakit: number;
    alfa: number;
  };
  izinRecords: IzinRecord[];
}

export function RiwayatPage({ onBack, attendanceData, izinRecords }: RiwayatPageProps) {
  const chartData = [
    { name: 'Masuk', value: attendanceData.hadir },
    { name: 'Izin', value: attendanceData.izin },
    { name: 'Sakit', value: attendanceData.sakit },
    { name: 'Alfa', value: attendanceData.alfa },
  ];

  // Jumlah kegiatan hanya dihitung dari kehadiran
  const jumlahKegiatan = attendanceData.hadir;
  const tidakHadir = attendanceData.izin + attendanceData.sakit + attendanceData.alfa;
  
  // Total untuk perhitungan persentase
  const totalPresensi = jumlahKegiatan + tidakHadir;
  const hadirPercentage = totalPresensi > 0 ? (jumlahKegiatan / totalPresensi) * 100 : 0;
  const tidakHadirPercentage = totalPresensi > 0 ? (tidakHadir / totalPresensi) * 100 : 0;

  const pieData = [
    { name: 'Hadir', value: hadirPercentage, color: '#16A34A' },
    { name: 'Tidak Hadir', value: tidakHadirPercentage, color: '#EF4444' },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-br from-cyan-600 to-cyan-500 text-white px-6 py-4 bg-[rgba(4,4,4,0)]">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={onBack} className="p-1 hover:bg-white/20 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-xl m-0">Riwayat Presensi</h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {/* Month Selector */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm text-gray-600 mb-2 block">Pilih bulan</label>
            <Select defaultValue="november">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="januari">Januari</SelectItem>
                <SelectItem value="februari">Februari</SelectItem>
                <SelectItem value="maret">Maret</SelectItem>
                <SelectItem value="april">April</SelectItem>
                <SelectItem value="mei">Mei</SelectItem>
                <SelectItem value="juni">Juni</SelectItem>
                <SelectItem value="juli">Juli</SelectItem>
                <SelectItem value="agustus">Agustus</SelectItem>
                <SelectItem value="september">September</SelectItem>
                <SelectItem value="oktober">Oktober</SelectItem>
                <SelectItem value="november">November</SelectItem>
                <SelectItem value="desember">Desember</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-2 block">Pilih Tahun</label>
            <Select defaultValue="2025">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Riwayat Presensi Harian */}
        <div className="mb-6">
          <h3 className="mb-4">Riwayat Presensi Harian</h3>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            <Card className="p-3 border-t-4 border-t-green-500">
              <div className="w-8 h-1 bg-green-500 mx-auto mb-2 rounded"></div>
              <p className="text-sm text-gray-600 m-0 mb-1 text-center">Hadir</p>
              <p className="text-3xl m-0 text-center tabular-nums">{attendanceData.hadir}</p>
            </Card>
            <Card className="p-3 border-t-4 border-t-blue-500">
              <div className="w-8 h-1 bg-blue-500 mx-auto mb-2 rounded"></div>
              <p className="text-sm text-gray-600 m-0 mb-1 text-center">Izin</p>
              <p className="text-3xl m-0 text-center tabular-nums">{attendanceData.izin}</p>
            </Card>
            <Card className="p-3 border-t-4 border-t-amber-500">
              <div className="w-8 h-1 bg-amber-500 mx-auto mb-2 rounded"></div>
              <p className="text-sm text-gray-600 m-0 mb-1 text-center">Sakit</p>
              <p className="text-3xl m-0 text-center tabular-nums">{attendanceData.sakit}</p>
            </Card>
            <Card className="p-3 border-t-4 border-t-red-500">
              <div className="w-8 h-1 bg-red-500 mx-auto mb-2 rounded"></div>
              <p className="text-sm text-gray-600 m-0 mb-1 text-center">Alfa</p>
              <p className="text-3xl m-0 text-center tabular-nums">{attendanceData.alfa}</p>
            </Card>
          </div>

          {/* Chart */}
          <Card className="p-4 bg-gradient-to-br from-cyan-500 to-cyan-600">
            <h4 className="text-white mb-4 text-center">Absensi Kehadiran<br/>Bulan November</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                <XAxis dataKey="name" tick={{ fill: 'white', fontSize: 12 }} />
                <YAxis tick={{ fill: 'white', fontSize: 12 }} ticks={[0, 10, 20, 30]} domain={[0, 30]} />
                <Bar dataKey="value" fill="rgba(255,255,255,0.8)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Riwayat Presensi Kegiatan */}
        <div className="mb-6">
          <h3 className="mb-4">Riwayat Presensi kegiatan</h3>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <Card className="p-3 border-t-4 border-t-gray-400">
              <div className="w-8 h-1 bg-gray-400 mx-auto mb-2 rounded"></div>
              <p className="text-sm text-gray-600 m-0 mb-1 text-center text-[13px]">Jumlah Kegiatan</p>
              <p className="text-3xl m-0 text-center tabular-nums">{jumlahKegiatan}</p>
            </Card>
            <Card className="p-3 border-t-4 border-t-green-500">
              <div className="w-8 h-1 bg-green-500 mx-auto mb-2 rounded"></div>
              <p className="text-sm text-gray-600 m-0 mb-1 text-center">Hadir</p>
              <p className="text-3xl m-0 text-center tabular-nums">{attendanceData.hadir}</p>
            </Card>
            <Card className="p-3 border-t-4 border-t-red-500">
              <div className="w-8 h-1 bg-red-500 mx-auto mb-2 rounded"></div>
              <p className="text-sm text-gray-600 m-0 mb-1 text-center">Tidak Hadir</p>
              <p className="text-3xl m-0 text-center tabular-nums">{attendanceData.izin + attendanceData.sakit + attendanceData.alfa}</p>
            </Card>
          </div>

          {/* Pie Chart - Without border card */}
          <div className="py-6">
            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-700">Hadir</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <span className="text-sm text-gray-700">Tidak Hadir</span>
              </div>
            </div>
            <div className="relative">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-3xl m-0">
                  {totalPresensi > 0 ? hadirPercentage.toFixed(1) : '0.0'}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Riwayat Izin */}
        <div className="mb-6">
          <h3 className="mb-4">Riwayat Izin & Sakit</h3>
          
          {izinRecords.length === 0 ? (
            <Card className="p-6 text-center">
              <p className="text-gray-500 m-0">Belum ada riwayat izin atau sakit</p>
            </Card>
          ) : (
            <div className="space-y-3">
              {izinRecords.map(record => (
                <Card key={record.id} className="p-4 border-l-4" style={{ borderLeftColor: record.jenis === 'izin' ? '#3B82F6' : '#F59E0B' }}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={record.jenis === 'izin' ? 'bg-blue-500' : 'bg-amber-500'}>
                          {record.jenis === 'izin' ? 'Izin' : 'Sakit'}
                        </Badge>
                        <span className="text-xs text-gray-500">{record.tanggal}</span>
                      </div>
                      <p className="text-sm text-gray-700 m-0 leading-relaxed">
                        <span className="text-gray-600">Alasan:</span> {record.alasan}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}