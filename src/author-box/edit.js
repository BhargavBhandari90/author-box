import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	BlockControls,
} from '@wordpress/block-editor';
import {
	Panel,
	PanelBody,
	RangeControl,
	ToolbarButton,
	ToolbarGroup,
} from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import './editor.scss';

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { columns } = attributes;
	const innerBlocksProps = useInnerBlocksProps( {
		className: `card-grid columns-${ columns }`,
	} );

	const setColumns = ( value ) => {
		setAttributes( { columns: value } );
	};

	const { insertBlocks } = useDispatch( 'core/block-editor' );

	const addCards = () => {
		const newCards = Array.from( { length: 3 }, () =>
			wp.blocks.createBlock( 'buntywp/author-card' )
		);
		insertBlocks( newCards, undefined, clientId );
	};

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="plus" // WordPress Plus Icon
						label={ __( 'Add 3 Cards', 'text-domain' ) }
						onClick={ addCards }
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls key="setting">
				<Panel header="Author Box">
					<PanelBody title="Box Settings">
						<RangeControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							label="Columns"
							value={ columns }
							onChange={ ( value ) => setColumns( value ) }
							min={ 1 }
							max={ 5 }
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<div { ...innerBlocksProps } />
			</div>
		</>
	);
}
