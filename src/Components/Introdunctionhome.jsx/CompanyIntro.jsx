import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';

const CompanyIntro = () => {
    const styles = {
        companyIntro: {
            padding: '30px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        companyDescriptionTitle: {
            color: '#333',
            fontSize: '2em',
            marginBottom: '20px',
        },
        companyDescriptionText: {
            color: '#666',
            fontSize: '1.2em',
            marginBottom: '20px',
        },
        learnMoreBtn: {
            backgroundColor: '#ea830e',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            fontSize: '1em',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            marginBottom :'10px'
        },
        companyImages: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10%',
        },
        textWhite: {
            color: '#fff',
        },
    };

    return (
        <Container>
            <Row className="align-items-center" style={styles.companyIntro}>
                <Col md={6}>
                    <div className="text-center text-md-start" style={styles.textWhite}>
                        <h1 className="mb-3" style={styles.companyDescriptionTitle}>Grains Global</h1>
                        <h2 className="mb-4">Connecting the World with Quality Grains</h2>
                        <p className="mb-4" style={styles.companyDescriptionText}>
                            Grains Global is a leading exporter and importer of cereals,
                            pulses, and spices, delivering high-quality products to customers
                            worldwide.
                        </p>

                    </div> {/* <-- Missing closing div */}
                </Col>
                <Col md={6}>
                    <div className="text-center" style={styles.companyImages}>
                        <img
                            src="https://via.placeholder.com/500"
                            alt="Placeholder"
                            className="img-fluid rounded shadow"
                            style={{ maxWidth: '100%' }}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CompanyIntro;
