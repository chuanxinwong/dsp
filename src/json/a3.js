var datas = {
  "nodes": [

    // 0 ======================================

    { "id": "100", "name": "A00", "symbolSize": 50, "value": 20, "category": 0 },
    { "id": "101", "name": "A01", "symbolSize": 10, "value": 20, "category": 0 },
    { "id": "102", "name": "A02", "symbolSize": 10, "value": 20, "category": 0 },
    { "id": "103", "name": "A03", "symbolSize": 10, "value": 20, "category": 0 },
    { "id": "104", "name": "A04", "symbolSize": 10, "value": 20, "category": 0 },

    // 1 ======================================

    { "id": "200", "name": "B00", "symbolSize": 20, "value": 30, "category": 1 },
    { "id": "201", "name": "B01", "symbolSize": 20, "value": 30, "category": 1 },
    { "id": "202", "name": "B02", "symbolSize": 20, "value": 30, "category": 1 },
    { "id": "203", "name": "B03", "symbolSize": 20, "value": 30, "category": 1 },
    { "id": "204", "name": "B04", "symbolSize": 20, "value": 30, "category": 1 },

    // 2 ======================================

    { "id": "300", "name": "C00", "symbolSize": 30, "value": 40, "category": 2 },
    { "id": "301", "name": "C01", "symbolSize": 30, "value": 40, "category": 2 },
    { "id": "302", "name": "C02", "symbolSize": 30, "value": 40, "category": 2 },
    { "id": "303", "name": "C03", "symbolSize": 30, "value": 40, "category": 2 },
    { "id": "304", "name": "C04", "symbolSize": 30, "value": 40, "category": 2 },


    // 3 ======================================

    { "id": "400", "name": "D00", "symbolSize": 40, "value": 50, "category": 3 },
    { "id": "401", "name": "D01", "symbolSize": 40, "value": 50, "category": 3 },
    { "id": "402", "name": "D02", "symbolSize": 40, "value": 50, "category": 3 },
    { "id": "403", "name": "D03", "symbolSize": 40, "value": 50, "category": 3 },
    { "id": "404", "name": "D04", "symbolSize": 40, "value": 50, "category": 3 },

  ],
  "links": [
    //  子 父

    { "source": "100", "target": "200" },
    { "source": "101", "target": "200" },
    { "source": "101", "target": "201" },
    { "source": "102", "target": "202" },
    { "source": "103", "target": "203" },
    { "source": "104", "target": "204" },

    // -----------------------------------------------
    { "source": "300", "target": "200" },
    { "source": "300", "target": "201" },

    { "source": "301", "target": "201" },
    { "source": "301", "target": "202" },

    { "source": "302", "target": "202" },
    { "source": "302", "target": "203" },
    { "source": "302", "target": "204" },

    { "source": "303", "target": "201" },
    { "source": "303", "target": "202" },
    { "source": "303", "target": "203" },

    { "source": "304", "target": "200" },
    { "source": "304", "target": "202" },
    { "source": "304", "target": "204" },

    // ------------------------------------------------
    { "source": "400", "target": "300" },
    { "source": "400", "target": "301" },

    { "source": "401", "target": "301" },
    { "source": "401", "target": "304" },

    { "source": "402", "target": "302" },
    { "source": "402", "target": "303" },
    { "source": "402", "target": "204" },

    { "source": "403", "target": "101" },
    { "source": "403", "target": "202" },
    { "source": "403", "target": "303" },
    { "source": "403", "target": "403" },

    { "source": "404", "target": "300" },
    { "source": "404", "target": "302" },
    { "source": "404", "target": "200" },

  ],
  "categories": [
    {
      "name": "类目0"
    },
    {
      "name": "类目1"
    },
    {
      "name": "类目2"
    },
    {
      "name": "类目3"
    },
  ]
}