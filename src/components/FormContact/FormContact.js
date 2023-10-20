import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormStyle, InputField, Error, AddBtn } from './FormContact.styled';

const contactsSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, 'Please, enter only letter')
        .min(3, 'Too short!')
        .required('This field is required!'),
    number: Yup.string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format: XXX-XX-XX')
        .required('This field is required!'),
})

export const FormContact = ({ onAdd }) => {
    return (
        
            <Formik
                initialValues={{
                    name: '',
                    number:'',
        
            }}
            validationSchema={contactsSchema}
                onSubmit={(values, actions) => {
                    onAdd(values);
                    actions.resetForm();
            }}>
            
                <FormStyle>
                    <label>
                    <InputField name="name" type="text" placeholder="Enter name" />
                    <Error name='name' component='div'/>
                    </label>

                    <label>
                    <InputField name="number" type="tel" placeholder="Enter number XXX-XX-XX" />
                    <Error name='number' component='div'/>
                    </label>

                    <AddBtn type="submit">Add contact</AddBtn>
                </FormStyle>
            </Formik>
        
    )
}
