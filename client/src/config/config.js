export const Config = () => {

    const siteUrl = process.env.REACT_APP_SITE_URL
    console.log(siteUrl);
    return {
        siteUrl : siteUrl
    }
}