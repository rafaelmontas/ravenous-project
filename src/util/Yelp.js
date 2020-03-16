const apiKey = "R4JKcCGd4zpDIfj-eMRfRAQlnwz_jhy6oJ4XDZcg3hoSHG36EnHR2mA26wah0KfyHI3QmoXR3zXujZs8od8IqlXEBPxBsFEv69p6dxj0pk1ud6S3Fqm_YzxLXbtuXnYx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        })
      }
    })
  }
}

export default Yelp;
