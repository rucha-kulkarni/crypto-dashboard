import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function PriceType({ priceType, handlePriceTypeChange }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1.5rem",
      }}
    >
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={(e) => {
          handlePriceTypeChange(e);
        }}
        sx={{
          borderColor: "var(--coral)",
          border: "unset !important",
          "& .Mui-selected": {
            color: "var(--coral) !important",
            backgroundColor: "#ff6b6b29 !important",
          },
          "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid var(--coral)!important",
          borderColor: "unset",
          color: "var(--coral) !important ",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--coral) !important",
          },
        }}
      >
        <ToggleButton value="prices">Prices</ToggleButton>
        <ToggleButton value="market_caps">Market Cap</ToggleButton>
        <ToggleButton value="total_volumes">Total Volume</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
