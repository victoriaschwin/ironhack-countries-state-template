<template>
  <img src="#" alt="country flag" style="width: 300px" />
  <h1>{{ countryStore.country.name }}</h1>
  <table class="table">
    <thead></thead>
    <tbody>
      <tr>
        <td style="width: 30%">Capital</td>
        <td>{{ countryStore.country.capital }}</td>
      </tr>
      <tr>
        <td>Area</td>
        <td>{{ countryStore.country.area }} km<sup>2</sup></td>
      </tr>
      <tr>
        <td>Borders</td>
        <td>
          <ul>
            <li v-for="border in countryStore.country.borders">
              <a href="/">{{ border }}</a>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup></script>
import { useCountryStore } from "../stores/country.js";
const countryStore = useCountryStore();
<style></style>
