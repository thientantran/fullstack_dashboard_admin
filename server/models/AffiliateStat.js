import { default as mongoose, default as moongse } from "mongoose";

const AffiliateStatSchema = moongse.Schema(
  {
    userId: {type: mongoose.Types.ObjectId, ref:"Admin"},
    affiliateSales:{
      type: [moongse.Types.ObjectId],
      ref: "Transaction"
    }
  },
  {timestamps: true}
)

const AffiliateStat = moongse.model("AffiliateStat", AffiliateStatSchema);
export default AffiliateStat