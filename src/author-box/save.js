import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { columns } = attributes;

	return (
		<div
			{ ...useBlockProps.save() }
			className={ `card-grid columns-${ columns }` }
		>
			<InnerBlocks.Content />
		</div>
	);
}
