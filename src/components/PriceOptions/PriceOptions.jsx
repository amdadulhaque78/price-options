import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 29.99,
          "billing_cycle": "monthly",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 group fitness class per week",
            "Free water bottle on signup",
            "Access to off-peak hours only",
            "Online workout tracking"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 49.99,
          "billing_cycle": "monthly",
          "features": [
            "Access to gym equipment",
            "Locker room and shower access",
            "Unlimited group fitness classes",
            "1 personal training session per month",
            "Free Wi-Fi",
            "Access to all gym hours (peak & off-peak)",
            "10% discount at gym store",
            "Free monthly body composition analysis"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 79.99,
          "billing_cycle": "monthly",
          "features": [
            "Access to all gym facilities and amenities",
            "Locker room, shower, and sauna access",
            "Unlimited group fitness classes",
            "2 personal training sessions per month",
            "Access to VIP lounge",
            "Towel service",
            "Priority booking for fitness classes",
            "Free nutritional consultation every 3 months",
            "Complimentary access to premium workout apps"
          ]
        },
        {
          "id": 4,
          "name": "Family Plan",
          "price": 109.99,
          "billing_cycle": "monthly",
          "features": [
            "Access for up to 4 family members",
            "All gym facilities for each member",
            "Unlimited group fitness classes for the whole family",
            "1 family training session per month",
            "Family locker room access",
            "Free access to kids' play area",
            "Discounts on family yoga and wellness workshops",
            "Priority booking for family classes",
            "10% discount on additional services"
          ]
        },
        {
          "id": 5,
          "name": "Annual Membership",
          "price": 499.99,
          "billing_cycle": "annually",
          "features": [
            "Access to all gym facilities",
            "Unlimited group fitness classes",
            "Locker room, shower, and sauna access",
            "1 personal training session per month",
            "Free guest passes (5 per year)",
            "Free access to special fitness events",
            "Complimentary fitness gear (t-shirt, bag)",
            "Free locker rental for the year",
            "Priority registration for all events and workshops"
          ]
        }
      ]
      


    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;