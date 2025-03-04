import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { imageUrl, bioText, imageWidth, imageHeight } = attributes;
	return (
		<div
			{ ...useBlockProps.save() }
			style={ {
				textAlign: 'center',
				border: '1px solid #ddd',
				padding: '15px',
			} }
		>
			{ imageUrl && (
				<img
					src={ imageUrl }
					alt="Author"
					className="bwp-author-image"
				/>
			) }
			<RichText.Content tagName="p" value={ bioText } />
		</div>
	);
}
