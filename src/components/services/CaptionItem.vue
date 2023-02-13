<script setup lang="ts">
import { openFile, saveFile } from './Caption.vue'

const translations: Array<String> = new Array(1)
</script>

<template>
  <main>
    <button @click="openFile">Open File</button>

    <br />
    <br />

    <input
      type="text"
      id="formula-text-input"
      name="formula_text_input"
      minlength="1"
      maxlength="32"
      size="16"
    />

    <table>
      <thead>
        <th>ID</th>
        <th>Original</th>
        <th>Initial</th>
        <th>Preprocess</th>
        <th>Alternative</th>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in translations" :key="idx">
          <td>{{ item }}</td>
        </tr>
      </tbody>
      <tfoot>
        <td colSpan="{2}">
          <button @click="saveFile">Save File</button>
        </td>
      </tfoot>
    </table>
  </main>
</template>
