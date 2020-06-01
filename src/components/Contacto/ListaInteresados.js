import React from 'react';

const ListaInteresados = () => {
    return (
        <div className="accordion row" id="accordionExample">
            <div className="card col-md-6">
                <div className="card-header card-header-rose card-header-text" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-rose btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Kevin Peinado Leiva <i className="material-icons" style={{ float: "right", marginTop: 1 }}>keyboard_arrow_down</i>
                        </button>
                    </h2>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                        <p>
                            <strong><i className="material-icons">date_range</i></strong> 01/06/2020<br />
                            <strong><i className="material-icons">settings_phone</i></strong> 923966203<br />
                            <strong><i className="material-icons">description</i></strong> Queria saber donde puedo recoger la libreta de mi hijo, ese csmr no me quiere decir nada, es bien vago ese pendejo aiuda.<br />
                        </p>

                        <button className="btn btn-rose"><i className="material-icons">done_all</i> Marcar Como Atendido</button>
                    </div>
                </div>
            </div>

            <div className="card col-md-6">
                <div className="card-header card-header-success card-header-text" id="headingTwo">
                    <h2 className="mb-0">
                        <button className="btn btn-success btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Dany Gelacio M. <i className="material-icons" style={{ float: "right", marginTop: 1 }}>keyboard_arrow_down</i>
                        </button>
                    </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
                </div>
            </div>

            <div className="card col-md-6">
                <div className="card-header card-header-warning card-header-text" id="headingThree">
                    <h2 className="mb-0">
                        <button className="btn btn-warning btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Dayana Peinado Leiva<i className="material-icons" style={{ float: "right", marginTop: 1 }}>keyboard_arrow_down</i>
                        </button>
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
                </div>
            </div>
        </div>
    )
}

export default ListaInteresados;