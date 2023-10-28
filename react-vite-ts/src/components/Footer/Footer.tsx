
import Card from 'react-bootstrap/Card'


const Footer = () => {
    /* const navigate=useNavigate(); */

    return(
        <>
        <footer>
            <Card>
                <Card.Header>pero mira ese Footer</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        “No soy un hombre de plegarias, pero si estás en el cielo, ¡sálvame, por favor, Superman!”.{' '}
                    </p>
                    <footer className="blockquote-footer">
                        Tirate a un Pozo <cite title="Source Title">Shelbyville</cite>
                    </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            </footer>
        </>
    );
}
export default Footer;