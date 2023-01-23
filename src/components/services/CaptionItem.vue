<script setup lang="ts">
import { onMounted } from 'vue'
import { read, write, utils, writeFileXLSX } from 'xlsx'
import { writeBinaryFile } from '@tauri-apps/api/fs'
import { open, save } from '@tauri-apps/api/dialog'

interface PreprocessedTranslation {
  id: number
  nametag: string
  preprocessedBody: string
  alternativeText: string
}

const translationData = [
  [
    'Halloo Erde!',
    'Hallo Welt!',
    'Hallo Welt!',
    'Hallo Welt!',
    'undefined',
    '#B20',
    '100.0'
  ]
]

const filters = [
  { name: 'Comma Separated Values', extensions: ['csv'] },
  { name: 'Fluent', extensions: ['ftl'] },
  { name: 'JSON', extensions: ['json'] }
]

const inputs = document.getElementById('formula-text-input')

let translations: Array<String> = new Array(1)

const CellDimensions = {
  width: Number,
  height: Number
}

const SpreadsheetData = {
  type: String,
  title: String,
  dimensions: CellDimensions
}

class SpreadsheetModel {
  #data: unknown[] = []
  #minDimensions: number[] = []
  #maxDimensions: number[] = []
  #columns: SpreadsheetModel[] = []
  #rows: SpreadsheetModel[] = []
  #columnResize: boolean = false
  #rowResize: boolean = false
}

onMounted(async () => {
  /* Download from https://sheetjs.com/pres.numbers */
  const data = await fetch('@/user/resources/store/docs/')
  const buffer = await data.arrayBuffer()

  /* parse workbook */
  const workbook = read(buffer)

  /* update data */
  translations = utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])
})

async function openFile() {
  /* show open file dialog */
  const selected = await open({
    title: 'Open Spreadsheet',
    multiple: false,
    directory: false,
    filters
  })

  /* read data into a Uint8Array */
  const data = read(selected)

  /* parse with SheetJS */
  const workbook = read(data)
  return workbook
}

async function saveFile(workbook: any) {
  /* show save file dialog */
  const selected = await save({
    title: 'Save to Spreadsheet',
    filters
  })

  /* Generate workbook */
  // const bookType = selected!.slice(selected!.lastIndexOf(".") + 1);
  const data = write(workbook, { type: 'buffer' })

  /* save data to file */
  await writeBinaryFile(selected!, data)
}

if (inputs != null) {
  // type UnknownInputType = "input" | "form"; // preferred type input
  // for addEventListener"s event-type
  inputs.addEventListener('input', eventListener => {
    // choose mouse-focused target
    switch (eventListener.type) {
      case 'focus':
      case 'click':
      case 'dblclick':
        RegExp(inputs.toString()) // for as to-string typecast conversion
    }
  })
  // made two separate events in the same type guard for throughput
  inputs.addEventListener('form', eventListener => {
    switch (eventListener.type) {
      case 'focus':
      case 'click':
      case 'dblclick':
        RegExp(inputs.toString()) // for as to-string typecast conversion
    }
  })
}
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

<style>
table.center {
  margin-left: auto;
  margin-right: auto;
}
</style>
