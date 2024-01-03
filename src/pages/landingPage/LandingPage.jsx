import { Blurb, NavBar } from '../../components/index'
import { PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR, ON_HOVER_COLOR, BACKGROUND_COLOR } from '../../styles/static';
import { navBarTexts, introTexts, blurbTexts, interactiveResumeTexts } from '../../STATIC_TEXTS/staticText';

const LandingPage = () => {
    return (
        <div style={{ backgroundColor: BACKGROUND_COLOR, textAlign: "center"}}>
            <NavBar textColor={PRIMARY_TEXT_COLOR} hoverColor={ON_HOVER_COLOR} backgroundColor={BACKGROUND_COLOR} text={navBarTexts}/>
            <Blurb primaryTextColor={PRIMARY_TEXT_COLOR} hoverColor={ON_HOVER_COLOR} secondaryTextColor={SECONDARY_TEXT_COLOR} introTexts={introTexts}/>
        </div>
    )
}

export default LandingPage