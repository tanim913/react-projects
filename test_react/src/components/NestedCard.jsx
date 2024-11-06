
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
function NestedCard(props) {
    const { fullname, age, phones } = props;
    return (
        <>
            <div className="user-card">
                <p><strong>Full Name:</strong> {fullname}</p>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Phones</strong></p>
                {phones.map((phone, index) => (
                    <div key={index}>
                        {phone.home && <p className="tab-space"><strong><FaPhoneAlt /> </strong>  {phone.home}</p>}
                        {phone.office && <p className="tab-space"><strong><IoMdPhonePortrait /></strong> {phone.office}</p>}
                    </div>
                ))}
            </div>
        </>
    )
}
export default NestedCard;
