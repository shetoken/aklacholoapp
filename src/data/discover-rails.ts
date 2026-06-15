import type { DiscoverRails } from '@/types';
import { img } from '@/constants/images';

/** Rolling Discover rails — festivals, Bengali calendar, palaces. */
export const discoverRails: DiscoverRails = {
  festivals: [
    {
      id: 'fest_durga_puja',
      title: 'Durga Puja',
      subtitle: 'The great autumn festival',
      image: img('fest-durga', 'Durga Puja pandal', { aspectRatio: 0.85 }),
    },
    {
      id: 'fest_poila_boishakh',
      title: 'Poila Boishakh',
      subtitle: 'Bengali New Year',
      image: img('fest-poila', 'Poila Boishakh celebration', { aspectRatio: 0.85 }),
    },
    {
      id: 'fest_kali_puja',
      title: 'Kali Puja',
      subtitle: 'Festival of light',
      image: img('fest-kali', 'Kali Puja lamps', { aspectRatio: 0.85 }),
    },
    {
      id: 'fest_rath_yatra',
      title: 'Rath Yatra',
      subtitle: 'Chariot procession',
      image: img('fest-rath', 'Rath Yatra chariot', { aspectRatio: 0.85 }),
    },
    {
      id: 'fest_basant',
      title: 'Basant Utsav',
      subtitle: 'Spring of colour',
      image: img('fest-basant', 'Basant Utsav at Shantiniketan', { aspectRatio: 0.85 }),
    },
    {
      id: 'fest_saraswati',
      title: 'Saraswati Puja',
      subtitle: 'Goddess of learning',
      image: img('fest-saraswati', 'Saraswati Puja altar', { aspectRatio: 0.85 }),
    },
  ],
  calendar: [
    {
      id: 'cal_boishakh',
      title: 'Boishakh',
      subtitle: 'First month · New Year',
      image: img('cal-boishakh', 'Bengali calendar Boishakh', { aspectRatio: 0.85 }),
    },
    {
      id: 'cal_joishtho',
      title: 'Joishtho',
      subtitle: 'Summer heat',
      image: img('cal-joishtho', 'Bengali summer month', { aspectRatio: 0.85 }),
    },
    {
      id: 'cal_asharh',
      title: 'Asharh',
      subtitle: 'Monsoon arrives',
      image: img('cal-asharh', 'Monsoon in Bengal', { aspectRatio: 0.85 }),
    },
    {
      id: 'cal_shrabon',
      title: 'Shrabon',
      subtitle: 'Rains and rivers',
      image: img('cal-shrabon', 'Shrabon rains', { aspectRatio: 0.85 }),
    },
    {
      id: 'cal_bhadro',
      title: 'Bhadro',
      subtitle: 'Pre-festival calm',
      image: img('cal-bhadro', 'Late monsoon', { aspectRatio: 0.85 }),
    },
    {
      id: 'cal_ashwin',
      title: 'Ashwin',
      subtitle: 'Durga Puja season',
      image: img('cal-ashwin', 'Ashwin autumn', { aspectRatio: 0.85 }),
    },
    {
      id: 'cal_kartik',
      title: 'Kartik',
      subtitle: 'Kali Puja & light',
      image: img('cal-kartik', 'Kartik festival light', { aspectRatio: 0.85 }),
    },
    {
      id: 'cal_poush',
      title: 'Poush',
      subtitle: 'Harvest & Poush Parbon',
      image: img('cal-poush', 'Poush harvest festival', { aspectRatio: 0.85 }),
    },
  ],
  palaces: [
    {
      id: 'pal_hazarduari',
      title: 'Hazarduari',
      subtitle: 'Murshidabad · thousand doors',
      image: img('pal-hazarduari', 'Hazarduari Palace', { aspectRatio: 0.85 }),
    },
    {
      id: 'pal_cooch_behar',
      title: 'Cooch Behar',
      subtitle: 'Royal hill palace',
      image: img('pal-cooch', 'Cooch Behar Palace', { aspectRatio: 0.85 }),
    },
    {
      id: 'pal_shobhabazar',
      title: 'Shobhabazar Rajbari',
      subtitle: 'Kolkata Durga Puja seat',
      image: img('pal-shobhabazar', 'Shobhabazar Rajbari', { aspectRatio: 0.85 }),
    },
    {
      id: 'pal_marble',
      title: 'Marble Palace',
      subtitle: 'North Kolkata mansion',
      image: img('pal-marble', 'Marble Palace Kolkata', { aspectRatio: 0.85 }),
    },
    {
      id: 'pal_bawali',
      title: 'Bawali Rajbari',
      subtitle: 'Riverine zamindar estate',
      image: img('pal-bawali', 'Bawali Rajbari', { aspectRatio: 0.85 }),
    },
    {
      id: 'pal_lalbagh',
      title: 'Lalbagh Fort',
      subtitle: 'Dhaka · Mughal legacy',
      image: img('pal-lalbagh', 'Lalbagh Fort Dhaka', { aspectRatio: 0.85 }),
    },
  ],
};
