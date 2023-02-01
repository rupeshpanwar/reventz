import cuid from 'cuid';
import React, { useState } from 'react';
import { Segment, Form, Header, FormField, Button } from 'semantic-ui-react';

export default function EventForm({setFormOpen, setEvents, createEvent, selectedEvent}){

    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    }
    const [values,setValues] = useState(initialValues)

    function handleFormSubmit(){
       // console.log(values);
       createEvent({...values, id: cuid(), hostedBy: 'Bob', attendees: [], hostPhotoURL: '/assets/user.png',});
       setFormOpen(false);
    }

    function handleInputChange(e){
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }

    return (
        <Segment clearing>
            <Header content='Create New Event' />
            <Form onSubmit={handleFormSubmit}>
                <FormField>
                    <input 
                    type='text' 
                    placeholder='Event title'
                    name = 'title'
                    value={values.title}
                 //   onChange={(e) => setTitle(e.target.value)} 
                    onChange= {(e) => handleInputChange(e) }/>
                </FormField>
                <FormField>
                    <input type='text' placeholder='Category' 
                     name = 'category'
                     value={values.category}
                  //   onChange={(e) => setTitle(e.target.value)} 
                     onChange= {(e) => handleInputChange(e) }
                     />
                </FormField>
                <FormField>
                    <input type='text' placeholder='Description' 
                     name = 'description'
                     value={values.description}
                  //   onChange={(e) => setTitle(e.target.value)} 
                     onChange= {(e) => handleInputChange(e) }
                      />
                </FormField>
                <FormField>
                    <input type='text' placeholder='City' 
                     name = 'city'
                     value={values.city}
                  //   onChange={(e) => setTitle(e.target.value)} 
                     onChange= {(e) => handleInputChange(e) }
                      />
                </FormField>
                <FormField>
                    <input type='text' placeholder='Venue' 
                     name = 'venue'
                     value={values.venue}
                  //   onChange={(e) => setTitle(e.target.value)} 
                     onChange= {(e) => handleInputChange(e) }
                    />
                </FormField>
                <FormField>
                    <input type='date' placeholder='Event date' 
                     name = 'date'
                     value={values.date}
                  //   onChange={(e) => setTitle(e.target.value)} 
                     onChange= {(e) => handleInputChange(e) }
                    />
                </FormField>
                <Button type='submit' floated='right' positive content='Submit' />
                <Button onClick={() => setFormOpen(false)} type='submit' floated='right'  content='Cancel' />
            </Form>
        </Segment>
    )
}

