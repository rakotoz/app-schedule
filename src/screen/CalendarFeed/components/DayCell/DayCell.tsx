import React from 'react';
import { Wrapper, DateContainer, EventsContainer } from './atoms';
import Date from '../Date/Date';
import EventInfo from '../EventInfo/EventInfo';
import { DisplayedEvent } from '../../../../types/Event.type';

type Props = DisplayedEvent;

class DayCell extends React.Component<Props> {
    shouldComponentUpdate(nextProps: Props) {
        const shouldUpdate: boolean = this.props.title !== nextProps.title;
        return shouldUpdate;
    }

    render() {
        const { showDate, ...eventInfo } = this.props;
        return (
            <Wrapper>
                <DateContainer>
                    {showDate ? <Date isToday={eventInfo.isToday} date={eventInfo.startDate} /> : null}
                </DateContainer>
                <EventsContainer>
                    <EventInfo event={eventInfo} />
                </EventsContainer>
            </Wrapper>
        );
    }
}

export default DayCell;
