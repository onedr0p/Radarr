import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'Components/Form/Form';
import FormGroup from 'Components/Form/FormGroup';
import FormInputGroup from 'Components/Form/FormInputGroup';
import FormLabel from 'Components/Form/FormLabel';
import Button from 'Components/Link/Button';
import ModalBody from 'Components/Modal/ModalBody';
import ModalContent from 'Components/Modal/ModalContent';
import ModalFooter from 'Components/Modal/ModalFooter';
import ModalHeader from 'Components/Modal/ModalHeader';
import { inputTypes } from 'Helpers/Props';
import { setMovieOverviewOption } from 'Store/Actions/MovieIndexActions';
import translate from 'Utilities/String/translate';
import selectOverviewOptions from '../selectOverviewOptions';

const posterSizeOptions = [
  { key: 'small', value: translate('Small') },
  { key: 'medium', value: translate('Medium') },
  { key: 'large', value: translate('Large') },
];

interface MovieIndexOverviewOptionsModalContentProps {
  onModalClose(...args: unknown[]): void;
}

function MovieIndexOverviewOptionsModalContent(
  props: MovieIndexOverviewOptionsModalContentProps
) {
  const { onModalClose } = props;

  const {
    detailedProgressBar,
    size,
    showMonitored,
    showStudio,
    showQualityProfile,
    showAdded,
    showPath,
    showSizeOnDisk,
    showSearchAction,
  } = useSelector(selectOverviewOptions);

  const dispatch = useDispatch();

  const onOverviewOptionChange = useCallback(
    ({ name, value }) => {
      dispatch(setMovieOverviewOption({ [name]: value }));
    },
    [dispatch]
  );

  return (
    <ModalContent onModalClose={onModalClose}>
      <ModalHeader>{translate('OverviewOptions')}</ModalHeader>

      <ModalBody>
        <Form>
          <FormGroup>
            <FormLabel>{translate('PosterSize')}</FormLabel>

            <FormInputGroup
              type={inputTypes.SELECT}
              name="size"
              value={size}
              values={posterSizeOptions}
              onChange={this.onChangeOverviewOption}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>{translate('DetailedProgressBar')}</FormLabel>

            <FormInputGroup
              type={inputTypes.CHECK}
              name="detailedProgressBar"
              value={detailedProgressBar}
              helpText={translate('DetailedProgressBarHelpText')}
              onChange={this.onChangeOverviewOption}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>{translate('ShowMonitored')}</FormLabel>

            <FormInputGroup
              type={inputTypes.CHECK}
              name="showMonitored"
              value={showMonitored}
              onChange={this.onChangeOverviewOption}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>{translate('ShowStudio')}</FormLabel>

            <FormInputGroup
              type={inputTypes.CHECK}
              name="showStudio"
              value={showStudio}
              onChange={this.onChangeOverviewOption}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>{translate('ShowQualityProfile')}</FormLabel>

            <FormInputGroup
              type={inputTypes.CHECK}
              name="showQualityProfile"
              value={showQualityProfile}
              onChange={this.onChangeOverviewOption}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>{translate('ShowDateAdded')}</FormLabel>

            <FormInputGroup
              type={inputTypes.CHECK}
              name="showAdded"
              value={showAdded}
              onChange={this.onChangeOverviewOption}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>{translate('ShowPath')}</FormLabel>

            <FormInputGroup
              type={inputTypes.CHECK}
              name="showPath"
              value={showPath}
              onChange={this.onChangeOverviewOption}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>{translate('ShowSizeOnDisk')}</FormLabel>

            <FormInputGroup
              type={inputTypes.CHECK}
              name="showSizeOnDisk"
              value={showSizeOnDisk}
              onChange={this.onChangeOverviewOption}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>{translate('ShowSearch')}</FormLabel>

            <FormInputGroup
              type={inputTypes.CHECK}
              name="showSearchAction"
              value={showSearchAction}
              helpText={translate('ShowSearchHelpText')}
              onChange={this.onChangeOverviewOption}
            />
          </FormGroup>
        </Form>
      </ModalBody>

      <ModalFooter>
        <Button onPress={onModalClose}>{translate('Close')}</Button>
      </ModalFooter>
    </ModalContent>
  );
}

export default MovieIndexOverviewOptionsModalContent;
