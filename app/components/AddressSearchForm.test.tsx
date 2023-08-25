"use cient";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddressSearchForm from "./AddressSearchForm";

describe("AddressSearchForm", () => {
  it("renders correctly", () => {
    const { getByLabelText, getByText } = render(
      <AddressSearchForm onGeocodingResult={() => {}} />
    );

    const addressInput = getByLabelText("Enter Address:");
    const searchButton = getByText("LookUp");

    expect(addressInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it("triggers geocoding result when form is submitted", async () => {
    const mockGeocodingResult = jest.fn();
    const { getByLabelText, getByText } = render(
      <AddressSearchForm onGeocodingResult={mockGeocodingResult} />
    );

    const addressInput = getByLabelText("Enter Address:");
    const searchButton = getByText("LookUp");

    fireEvent.change(addressInput, { target: { value: "123 Main St" } });
    fireEvent.click(searchButton);

    // Here, you can also use waitFor or waitForElementToBeRemoved if necessary
    expect(mockGeocodingResult).toHaveBeenCalledWith({
      lat: "latValue",
      lon: "lonValue",
      display_name: "addressValue",
    });
  });
});
