import React from "react";
import { Navigate, useParams } from "react-router-dom";

import { getId } from "../../Data/logements";

import Carroussel from "../../components/Carroussel";
import IntoLogement from "../../components/IntroLogement";
import Dropdown from "../../components/DropDown";

import "../../utils/css/style.css";

function PageLogements() {
  const { logementId } = useParams();
  const ficheLogement = getId(logementId);

  if (ficheLogement === undefined || ficheLogement === null) {
    return <Navigate to='/page404'></Navigate>;
  }

  return (
    <div>
      <Carroussel pictures={ficheLogement.pictures} />
      <IntoLogement
        titre={ficheLogement.title}
        localisation={ficheLogement.location}
        proprietaire={ficheLogement.host.name}
        photoProprietaire={ficheLogement.host.picture}
        note={ficheLogement.rating}
        tags={ficheLogement.tags}
      />
      <div className='details'>
        <Dropdown
          title='Description'
          text={ficheLogement.description}
          extraClass='reduit'
        />
        <Dropdown
          title='Équipements'
          text={ficheLogement.equipments}
          extraClass='reduit'
        />
      </div>
    </div>
  );
}

export default PageLogements;
