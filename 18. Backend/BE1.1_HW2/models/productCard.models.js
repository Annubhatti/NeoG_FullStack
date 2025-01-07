const mongoose = require("mongoose");

const productCardScheme = new mongoose.Scheme({
  title: String,
  productImgURL: String,
  starRating: Number,
  ratingsCount: Number,
  reviewsCount: Number,
  assured: Boolean,
  discountedPrice: Number,
  originalPrice: Number,
  discountPercent: Number,
  availableOffers: [
    {
      type: String,
    },
  ],
  offersLength: { type: Number },
  warranty: String,
  connectivity: Boolean,
  variant: [
    {
      type: String,
    },
  ],
});

const ProductCard = mongoose.model("ProductCard", ProductCard);

module.exports = ProductCard;