
import './styles/supportLink.scss';
import * as React from 'react';
import ForumIcon from '@mui/icons-material/Forum';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';

function SupportLink({ title, icon }) {
    return (
        <div className='supportLink' data-testid="supportLink">
            {icon === "chat" && <ForumIcon data-testid="chatIcon" />}
            {icon === "faq" && <LiveHelpRoundedIcon data-testid="faqIcon" />}
            <div className='title'>{title}</div>
        </div>
    );
}

export default SupportLink;

