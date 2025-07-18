import React from 'react'

export default function About(props) {
    return (
        <section className="text-center py-5" id="About">
            {/* Heading Box */}
            <div className="mb-3">
                <h2 className="border border-5 border-dark d-inline-block px-4 py-2 fw-bold fs-5 letter-spacing">
                    {props.about}
                </h2>
            </div>

            {/* Description */}
            <p className="text-muted px-3 px-md-5 mx-auto" style={{ maxWidth: "800px" }}>
                {props.description}
            </p>

            {/* Explore Line */}
            <div className="d-flex justify-content-center align-items-center my-4">
                <span className="border-start border-end border-3 border-dark px-3">{props.explore}</span>
            </div>

            {/* Divider */}
            <div className="my-4">
                <hr className="w-25 mx-auto" style={{ borderTop: "3px double #000", width: "100px" }} />
            </div>

            {/* Services Grid */}
            <div className="container mt-5">
                <div className="row justify-content-center">

                    {/* Development */}
                    <div className="col-md-4 mx-auto">
                        <h5 className="fw-bold text-uppercase">{props.development}</h5>
                        <p className="text-muted small">
                            {props.developmentDesc}
                        </p>
                    </div>

                    {/* Maintenance */}
                    <div className="col-md-4">
                        <h5 className="fw-bold text-uppercase">{props.maintenance}</h5>
                        <p className="text-muted small">
                            {props.maintenanceDesc}
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Divider */}
            <div className="mt-5">
                <hr className="w-100 mx-auto" style={{ borderTop: "3px double #000", width: "100px" }} />
            </div>
            
        </section>
    )
}
