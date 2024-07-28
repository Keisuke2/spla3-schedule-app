import RegularSchedule from 'components/Regular';
import BankaraSchedule from 'components/Bankara';
import XSchedule from 'components/X';
import EventSchedule from 'components/Event';
import FestSchedule from 'components/Fest';
import SRunSchedule from 'components/SalmonRun';

export const tabConfig = [
    { id: 'regular', label: 'レギュラーマッチ', component: RegularSchedule },
    { id: 'bankara', label: 'バンカラマッチ', component: BankaraSchedule },
    { id: 'x', label: 'Xマッチ', component: XSchedule },
    { id: 'event', label: 'イベントマッチ', component: EventSchedule },
    { id: 'fest', label: 'フェスマッチ', component: FestSchedule },
    { id: 'salmonrun', label: 'サーモンラン', component: SRunSchedule },
];