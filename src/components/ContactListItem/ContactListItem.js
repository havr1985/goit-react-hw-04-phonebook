import { ListItem, InfoBox, ContactName, ContactNumber, DelBtn } from "./ContactListItem.styled";

export const ContactListItem = ({ contact: { name, number, id }, onDelete }) => {
    return (
        <ListItem>
            <InfoBox>
            <ContactName>{name}:</ContactName>
            <ContactNumber>{number}</ContactNumber>
            </InfoBox>
            <DelBtn type="button" onClick={() => onDelete(id)}>Delete</DelBtn>
        </ListItem>
    )
}