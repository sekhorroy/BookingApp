import styled from 'styled-components';
import './featured.css';

const FeaturedContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    z-index: 1;
`

const FeaturedItem = styled.div`
    color: white;
    border-radius: 10px;
    overflow: hidden;
    height: 250px;
    position: relative;
`

const FeatureTitles = styled.div`
    position: absolute;
    bottom: 40px;
    left: 20px;
`
const FeatureImage = styled.img`
    width: 100%
    object-fit: cover;

`

const Featured = () => {
    return (
        <>
            <FeaturedContainer>
                <FeaturedItem>
                    <FeatureImage src="https://cf.bstatic.com/xdata/images/city/540x270/687157.webp?k=06b9ded0733baaca9efaa06a69ae4d0d74311d620280947ae909015e804028fb&o="
                                  alt = "image 1"
                    />
                    <FeatureTitles>
                        <h1>Manchester</h1>
                        <h2>123 properties</h2>
                    </FeatureTitles>
                </FeaturedItem>
                <FeaturedItem>
                    <FeatureImage src="https://cf.bstatic.com/xdata/images/city/540x270/687285.webp?k=84f6f2377af1738b4ee29fccea1af65634fe4258712f96f54491c08f1d026a95&o="
                                  alt = "image 2"
                    />
                    <FeatureTitles>
                        <h1>Austria</h1>
                        <h2>567 properties</h2>
                    </FeatureTitles>
                </FeaturedItem>
                <FeaturedItem>
                    <FeatureImage src="https://cf.bstatic.com/xdata/images/city/540x270/967919.webp?k=de3609fd5bbb0eead49d41a6d7edeb731376d0c89e372bce4fce6d80c64991a5&o="
                                  alt = "image 3"
                    />
                    <FeatureTitles>
                        <h1>Reno</h1>
                        <h2>456 properties</h2>
                    </FeatureTitles>
                </FeaturedItem>
            </FeaturedContainer>
        </>
    )
}

export default Featured;