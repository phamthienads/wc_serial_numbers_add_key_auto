const keys = [
  'KEY1',
  'KEY2',
  'KEY3',
];

async function fetchWithKey(serialKey) {
  const formData = new FormData();
  formData.append("product_id", "0");
  formData.append("serial_key", serialKey);
  formData.append("activation_limit", "0");
  formData.append("validity", "0");
  formData.append("status", "available");
  formData.append("order_id", "0");
  formData.append("action", "wcsn_edit_key");
  formData.append("id", "0");
  formData.append("_wpnonce", "142b683f05");
  formData.append("_wp_http_referer", "/wp-admin/admin.php?page=wc-serial-numbers&add");

  try {
    const response = await fetch("https://example.com/wp-admin/admin-post.php", {
      method: "POST",
      headers: {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
        "Cache-Control": "max-age=0",
        "Priority": "u=0, i",
        "Sec-Ch-Ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": "\"Windows\"",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1"
      },
      referrer: "https://example.com/wp-admin/admin.php?page=wc-serial-numbers&add",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: formData,
      mode: "cors",
      credentials: "include"
    });

    if (response.ok) {
      console.log(`Key ${serialKey} đã được xử lý thành công.`);
    } else {
      console.error(`Có lỗi xảy ra khi xử lý key ${serialKey}.`);
    }
  } catch (error) {
    console.error(`Đã xảy ra lỗi: ${error}`);
  }
}

keys.forEach(async key => {
  await fetchWithKey(key);
});