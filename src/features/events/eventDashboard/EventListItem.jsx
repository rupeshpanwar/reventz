import React  from "react";
import { Segment, Item, Icon , List, Button} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem(){
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        < Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header content='Event Title' />
                        </Item.Content>
                        <Item.Description>
                            Hosted by Bob
                        </Item.Description>
                        </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' />Date
                    <Icon name='marker' />Venue
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    <EventListAttendee />
                    <EventListAttendee />
                    <EventListAttendee />
           
                </List>
            </Segment>
            <Segment clearing>
                <span>Description of the event</span>
                <Button color='teal' floated='right' content='View' />
            </Segment>
        </Segment.Group>
    )
}