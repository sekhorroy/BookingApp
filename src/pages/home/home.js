import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import styled from "styled-components";
import Featured from "../../components/featured/featured";
import PropertyList from "../../components/property/propertylist";
import FeaturedProperties from "../../components/featuredproperties/featuredproperties";
import MailList from "../../components/maillist/maillist";
import FooterComponent from "../../components/footer/footer";

const HomeContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`
const HomeTitles = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: flex-start;
`

const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

function Home () {
    return (
        <>
            <Navbar />
            <Header />
            <HomeContainer>
                <Featured/>
                <HomeTitles>
                    <h2>Browse by property types</h2>
                </HomeTitles>
                <PropertyList />
                <HomeTitles>
                    <h2>Homes guests love</h2>
                </HomeTitles>
                <FeaturedProperties/>
                <FooterContainer>
                    <MailList />
                    <FooterComponent />
                </FooterContainer>
            </HomeContainer>
        </>
    );
}

export default Home