import { ColorName } from '../styles/theme';

export interface IEvent {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    color: ColorName;
}

export interface DisplayedEvent extends IEvent {
    isToday: boolean;
    showDate: boolean;
}
