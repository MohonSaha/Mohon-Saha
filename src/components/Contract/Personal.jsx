

const Personal = ({ contact }) => {
    return (
        <div>
            {contact.map(info => {
                return (
                    <div className="contact_info_parent">
                        <div className="contact__icon__parent">
                            <p className="contact__icon">{info.logo}</p>
                        </div>
                        <span className="contract_info">{info.title}</span>

                    </div>
                )
            })}
        </div>
    );
};

export default Personal;