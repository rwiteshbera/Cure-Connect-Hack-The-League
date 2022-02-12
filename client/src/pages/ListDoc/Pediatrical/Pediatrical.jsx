import "./Pediatrical.css"
import DocList from '../../../components/doclist/DocList';
export default function Patient() {
    return (
        <>
            <DocList />
            <div className="row row-cols-1 row-cols-md-3 g-4 frame">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://w7.pngwing.com/pngs/170/58/png-transparent-brown-haired-man-illustration-adobe-illustrator-cartoon-doctor-cartoon-character-blue-white-thumbnail.png" className="card-img-top img" alt="..." />
                        <div className="card-body body">
                            <h5 className="card-title docname">DR. ABC XYZ</h5>
                            <p className="card-text docsubname">M.B.B.S, M.D(London)</p>
                            <button type="button" class="btn btn-info btn button">Chat</button>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg" className="card-img-top img" alt="..." />
                        <div className="card-body body">
                            <h5 className="card-title docname">DR. ABC XYZ</h5>
                            <p className="card-text docsubname">M.B.B.S, M.D(London)</p>
                            <button type="button" class="btn btn-info btn button">Chat</button>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-handsome-white-doctor-illustration-free-material-doctordoctor-materialdoctor-illustrationdoctor-png-image_633147.jpg" className="card-img-top img" alt="..." />
                        <div className="card-body body">
                            <h5 className="card-title docname">DR. ABC XYZ</h5>
                            <p className="card-text docsubname">M.B.B.S, M.D(London)</p>
                            <button type="button" class="btn btn-info btn button">Chat</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="card mb-3 body2">
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title appoint">Join Appointment</h5>
                            <p className="card-text text3">This service aims to help Doctors whom have their own practice to generate an exclusive mobile app which will have information like about the doctor, Hours of Operation, Awards, Office Video, testimonials</p>
                            <button type="button" class="btn btn-info btn button2">
                            <a className="textjoin" href="https://video-call-healthcare.netlify.app/" target="__blank" >Join Room</a></button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="https://static.vecteezy.com/system/resources/previews/002/240/108/non_2x/doctor-in-a-clinic-giving-covid-19-coronavirus-vaccine-to-a-woman-for-immunity-health-concept-illustration-vector.jpg" className="img-fluid rounded-start img2" alt="..."/>
                    </div>
                </div>
            </div>

        </>
    )
}