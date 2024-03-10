const welcomeTemplate = (params) =>
  `
		<div>
			<p>Dear <strong>${params.full_name}</strong>,</p>
			<p>
			  Welcome to Genie. We are thrilled to have you on board. If you need further assistance, please reach out to your company administrator. We appreciate your collaboration. Thank you!
			</p>

			<div>Genie</div>
		</div>

    `;

export default welcomeTemplate;
