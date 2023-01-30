import React from 'react';
import { Segment, Form, Header, FormField, Button } from 'semantic-ui-react';

export default function EventForm({setFormOpen}){
    return (
        <Segment clearing>
            <Header content='Create New Event' />
            <Form>
                <FormField>
                    <input type='text' placeholder='Event title' />
                </FormField>
                <FormField>
                    <input type='text' placeholder='Category' />
                </FormField>
                <FormField>
                    <input type='text' placeholder='Description' />
                </FormField>
                <FormField>
                    <input type='text' placeholder='City' />
                </FormField>
                <FormField>
                    <input type='text' placeholder='Venue' />
                </FormField>
                <FormField>
                    <input type='date' placeholder='Event date' />
                </FormField>
                <Button type='submit' floated='right' positive content='Submit' />
                <Button onClick={() => setFormOpen(false)} type='submit' floated='right'  content='Cancel' />
            </Form>
        </Segment>
    )
}

