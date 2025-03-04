import { __ } from '@wordpress/i18n';
import { BlockControls, BlockMover, MediaUpload, RichText, useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	__experimentalGrid as Grid,
	PanelBody,
	ResizableBox,
	ToolbarGroup,
} from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { imageUrl, bioText, imgHeight, imgWidth } = attributes;

	return (
		<div { ...useBlockProps() }>
			<BlockControls>
				<ToolbarGroup>
					
				</ToolbarGroup>
			</BlockControls>
			<MediaUpload
				onSelect={ ( media ) =>
					setAttributes( { imageUrl: media.url } )
				}
				allowedTypes={ [ 'image' ] }
				type="image"
				render={ ( { open } ) => (
					<>
						{ imageUrl ? (
							<div className="bwp-image-container">
								<img
									src={ imageUrl }
									alt="Author"
									className="bwp-author-image"
								/>
								<Button
									className="upload-button"
									onClick={ open }
									variant="primary"
								>
									Change Image
								</Button>
							</div>
						) : (
							<Button
								className="upload-button"
								onClick={ open }
								variant="primary"
							>
								Upload Image
							</Button>
						) }
					</>
				) }
			/>
			<RichText
				tagName="p"
				value={ bioText }
				onChange={ ( value ) => setAttributes( { bioText: value } ) }
				placeholder="Enter author information..."
			/>
		</div>
	);
}
