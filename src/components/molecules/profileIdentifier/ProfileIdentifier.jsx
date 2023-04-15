import './styles/profileIdentifier.scss';
import * as React from 'react';
import User from '../../../assets/images/user.png';

function ProfileIdentifier({name, isDisplayName}) {
    return (
        <div className='profileIdentifier' data-testid="profileIdentifier">
            {isDisplayName && <div className='profile-name'>{name}</div>}
            <img className='image' src={User} alt='Profile' />
        </div>
    );
}

export default ProfileIdentifier;
